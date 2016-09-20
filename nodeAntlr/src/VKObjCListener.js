var ObjCListener = require('.././antlrLib/ObjectiveCParserListener').ObjectiveCParserListener
var c = require('./JPContext')
var JPCommonContext = c.JPCommonContext,
	JPMsgContext = c.JPMsgContext,
	JPParamContext = c.JPParamContext,
	JPBlockContext = c.JPBlockContext,
	JPBlockContentContext = c.JPBlockContentContext,
	JPAssignContext = c.JPAssignContext,
	JPAssignLeftContext = c.JPAssignLeftContext,
	JPAssignRightContext = c.JPAssignRightContext,
	JPDeclarationContext = c.JPDeclarationContext,
	JPClassContext = c.JPClassContext,
	JPMethodContext = c.JPMethodContext,
	JPPropertyCallingContext = c.JPPropertyCallingContext,
	JPPropertyCallerContext = c.JPPropertyCallerContext;

var excludeClassNames = [
		'BOOL', 
		'NSInteger', 
		'NSUInteger', 
		'CGFloat', 
		'CGRect', 
		'NSRange', 
		'CGSize', 
		'CGPoint'
	];

var JPObjCListener = function(cb) {
	ObjCListener.call(this);
	this.rootContext = new JPClassContext();
	this.currContext = this.rootContext;

	//Original Objective-C Script
	this.ocScript = '';

	//success callack
	this.cb = cb;

	//flag
	this.ignoreClass = 0;
	this.ignoreMethod = 0;

	this.requireClasses = [];

	return this;
}

JPObjCListener.prototype = Object.create(ObjCListener.prototype);
JPObjCListener.prototype.buildScript = function() {
	var requires = '';
	if (this.requireClasses.length) {
		requires = "require('" + this.requireClasses.join(',') + "');\n";
	}
	this.cb(requires + this.rootContext.parse());
}


JPObjCListener.prototype.addStrContext = function(stop) {
	var strContext = new JPCommonContext(this.ocScript.substring(this.currContext.currIdx, stop))
	this.currContext.setNext(strContext);
	return strContext;
}


ObjCListener.prototype.enterClassImplementation = function(ctx) {
	this.ocScript = ctx.start.source[1].strdata;
	this.currContext.className = ctx.children[1].start.text;
	this.currContext.ignore = this.ignoreClass;
};

ObjCListener.prototype.exitClassImplementation = function(ctx) {
	this.buildScript();
};


ObjCListener.prototype.enterClassMethodDeclaration = function(ctx) {
	var methodContext = new JPMethodContext();
	methodContext.ignore = this.ignoreMethod;
	this.rootContext.classMethods.push(methodContext);
	this.currContext = methodContext;
};

ObjCListener.prototype.exitClassMethodDeclaration = function(ctx) {
};


ObjCListener.prototype.enterInstanceMethodDefinition = function(ctx) {
	var methodContext = new JPMethodContext();
	methodContext.ignore = this.ignoreMethod;
	this.rootContext.instanceMethods.push(methodContext);
	this.currContext = methodContext;
};

ObjCListener.prototype.exitInstanceMethodDefinition = function(ctx) {
};

JPObjCListener.prototype.enterMethodDefinition = function(ctx) {
	var names = [],
		params = [];
	var methodSelectorContext = ctx.children[1];
	for (var i in methodSelectorContext.children) {
		var keywordDeclaratorContext = methodSelectorContext.children[i];
		names.push(keywordDeclaratorContext.start.text);
		if (keywordDeclaratorContext.stop.start != keywordDeclaratorContext.start.start) {
			params.push(keywordDeclaratorContext.stop.text)
		}
	}

	//currContext is JPMethodContext
	this.currContext.names = names;
	this.currContext.params = params;
	this.currContext.currIdx = ctx.children[2].start.start + 1;
};

JPObjCListener.prototype.exitMethodDefinition = function(ctx) {
	this.addStrContext(ctx.stop.stop)
};



JPObjCListener.prototype.enterBlockExpression = function(ctx) {
	var strContext = this.addStrContext(ctx.start.start)
	this.currContext = strContext;

	var blockContext = new JPBlockContext();
	this.currContext.setNext(blockContext);
	blockContext.currIdx = ctx.start.stop + 1

	var blockContentContext = new JPBlockContentContext();
	blockContentContext.parent = blockContext;
	blockContext.content = blockContentContext;
	this.currContext = blockContentContext;
};

JPObjCListener.prototype.exitBlockExpression = function(ctx) {
	this.addStrContext(ctx.stop.start);

	var preContext = this.currContext;
	while (!preContext.parent) {
		preContext = preContext.pre;
		if (!preContext) {
			throw new Error('block parse fail');
		}
	}
	this.currContext = preContext.parent;

	this.currContext.currIdx = ctx.stop.stop + 1
};

JPObjCListener.prototype.enterBlockParameters = function(ctx) {
	if (this.currContext instanceof JPBlockContentContext) {
		for (var i = 0; i < ctx.children.length; i ++) {
			if (ctx.children[i].children) {
				var declaration_specifiersContext = ctx.children[i].children[0];
				var declarationContext = ctx.children[i].children[1];
				var type = declaration_specifiersContext.start.text;
				var name = declarationContext.stop.text;
				if (declarationContext.start.text == '*') {
					type = type + '*'
				}
				this.currContext.parent.types.push(type);
				this.currContext.parent.names.push(name);
			}
		}
	}
};

JPObjCListener.prototype.exitBlockParameters = function(ctx) {
};


ObjCListener.prototype.enterCompoundStatement = function(ctx) {
	if (this.currContext instanceof JPBlockContentContext) {
		this.currContext.currIdx = ctx.start.stop + 1;
	}
};

ObjCListener.prototype.exitCompoundStatement = function(ctx) {
};





JPObjCListener.prototype.enterMessageExpression = function(ctx) {

	var newMsgContext = new JPMsgContext();
	if (this.currContext instanceof JPMsgContext) {
		//nested method invoke, e.g. [[UIView alloc] init]
		newMsgContext.preMsg = this.currContext;
		this.currContext.receiver = newMsgContext;

	} else {
		var strContext = this.addStrContext(ctx.start.start);
		this.currContext.setNext(strContext);
		strContext.setNext(newMsgContext);
	}
	this.currContext = newMsgContext;
};


JPObjCListener.prototype.exitMessageExpression = function(ctx) {
	if (this.currContext.preMsg) {
		this.currContext = this.currContext.preMsg
	} else {
		this.currContext = this.currContext.pre;
	}

	this.currContext.currIdx = ctx.stop.stop + 1
};


JPObjCListener.prototype.enterReceiver = function(ctx) {
	if (ctx.start.text != '[') {
		var receiverName = ctx.start.text;
		if (receiverName[0] >= 'A' && receiverName[0] <= 'Z') {
			// if the first letter is upper case, we take it as a class name
			if (excludeClassNames.indexOf(receiverName) == -1 && this.requireClasses.indexOf(receiverName) == -1) {
				this.requireClasses.push(receiverName);
			}
		}
		this.currContext.receiver = this.ocScript.substring(ctx.start.start, ctx.stop.stop + 1);
	}
};

JPObjCListener.prototype.exitReceiver = function(ctx) {
};


JPObjCListener.prototype.enterMessageSelector = function(ctx) {
	for (var i = 0; i < ctx.children.length; i ++) {
		this.currContext.selector.push({
			name: ctx.children[i].start.text,
			param: new JPParamContext()
		})	
		this.currContext.argumentIndex = 0;
	}
};

JPObjCListener.prototype.exitMessageSelector = function(ctx) {
};


JPObjCListener.prototype.enterKeywordArgument = function(ctx) {
	var paramContext = this.currContext.selector[this.currContext.argumentIndex].param;
	this.currContext.argumentIndex ++;
	paramContext.parent = this.currContext;
	this.currContext = paramContext;

	this.currContext.currIdx = ctx.start.stop + 2
};

JPObjCListener.prototype.exitKeywordArgument = function(ctx) {
	this.addStrContext(ctx.stop.stop + 1)

	var preContext = this.currContext;
	while (!(preContext instanceof JPParamContext)) {
		preContext = preContext.pre;
		if (!preContext) {
			throw new Error('parse argument failed');
		}
	}

	this.currContext = preContext.parent;
};





JPObjCListener.prototype.enterDeclaration = function(ctx) {
	if (ctx.children[1].start.text.indexOf('(') > -1) {
		//c function decalaration
		return;
	}

	var strContext = this.addStrContext(ctx.start.start)

	var declarationContext = new JPDeclarationContext();
	strContext.setNext(declarationContext);
	this.currContext = declarationContext;

	if (ctx.children[1].start.text.indexOf('*') > -1) {
		this.currContext.currIdx = ctx.children[1].start.start + 1
	} else {
		this.currContext.currIdx = ctx.children[1].start.start - 1
	}
};

JPObjCListener.prototype.exitDeclaration = function(ctx) {
};




JPObjCListener.prototype.enterAssignmentExpression = function(ctx) {
	if (ctx.children && ctx.children.length == 3 && ctx.children[1].start.text == '=') {
		var leftStr = ctx.start.source[1].strdata.substring(ctx.children[0].start.start, ctx.children[0].stop.stop + 1)
		if (leftStr.indexOf('.') > -1) {
			var assignContext = new JPAssignContext();

			var assignLeftContext = new JPAssignLeftContext();
			assignLeftContext.parent = assignContext;
			assignContext.left = assignLeftContext;

			var strContext = this.addStrContext(ctx.start.start)
			strContext.setNext(assignContext);

			this.currContext = assignLeftContext;
			this.currContext.currIdx = ctx.start.start;
		}
	}

};

JPObjCListener.prototype.exitAssignmentExpression = function(ctx) {
	if (ctx.children && ctx.children.length == 3 && ctx.children[1].start.text == '=') {
		var leftStr = ctx.start.source[1].strdata.substring(ctx.children[0].start.start, ctx.children[0].stop.stop + 1)
		if (leftStr.indexOf('.') > -1) {
			this.addStrContext(ctx.stop.stop + 1)
				
			var preContext = this.currContext;
			do {
				if (preContext instanceof JPAssignRightContext) {
					this.currContext = preContext.parent;
					this.currContext.currIdx = ctx.stop.stop + 1;
					break;
				}
			} while (preContext = preContext.pre)
		}
	}
};


JPObjCListener.prototype.enterAssignmentOperator = function(ctx) {
	if (ctx.start.text == '=') {
		var preContext = this.currContext;
		do {
			if (preContext instanceof JPAssignLeftContext) {
				this.addStrContext(ctx.start.start)

				var assignRightContext = new JPAssignRightContext();
				assignContext = preContext.parent;
				assignContext.right = assignRightContext;
				assignRightContext.parent = assignContext;

				assignRightContext.currIdx = ctx.stop.stop + 1;

				this.currContext = assignRightContext;
				break;
			}
		} while (preContext = preContext.pre)
	}
};



// Enter a parse tree produced by ObjCParser#for_in_statement.
ObjCListener.prototype.enterForInStatement = function(ctx) {
	if (ctx.children[2].ruleIndex == 57) {
		//is Type_variable_declaratorContext
		var typeVariableDeclaratorCtx = ctx.children[2];
	
		var strContext = this.addStrContext(typeVariableDeclaratorCtx.start.start);
		var declarationContext = new JPDeclarationContext();
		strContext.setNext(declarationContext);
		this.currContext = declarationContext;

		var declaratorCtx = typeVariableDeclaratorCtx.children[1];
		if (declaratorCtx && declaratorCtx.start.text == '*') {
			this.currContext.currIdx = declaratorCtx.start.stop + 1
		} else {
			this.currContext.currIdx = declaratorCtx.start.start
		}
	}
};

ObjCListener.prototype.exitForInStatement = function(ctx) {
};


ObjCListener.prototype.enterForStatement = function(ctx) {
	if (ctx.children[2] && ctx.children[2].ruleIndex == 67) {
		//is Declaration_specifiersContext
		var strContext = this.addStrContext(ctx.children[2].start.start);
		var declarationContext = new JPDeclarationContext();
		strContext.setNext(declarationContext);
		this.currContext = declarationContext;

		if (ctx.children[3].start.text == '*') {
			this.currContext.currIdx = ctx.children[3].start.stop + 1
		} else {
			this.currContext.currIdx = ctx.children[3].start.start
		}
	}
};

ObjCListener.prototype.exitForStatement = function(ctx) {
};




exports.JPObjCListener = JPObjCListener;