
var VKGrammerNode = function() {
	this.next = null;
	this.pre = null;
	this.currIdx = 0;
}

VKGrammerNode.prototype.parse = function() {
	return ''
}

VKGrammerNode.prototype.setNext = function(node) {
	ctx.pre = this;
	if (this.next) {
		this.next.next = ctx;
	} else {
		this.next = ctx;
	}
}


var VKCommonNode = function(str) {
	this.str = str;
}

VKCommonNode.prototype = Object.create(VKGrammerNode.prototype);
VKCommonNode.prototype.parse = function() {
	return this.str ? this.str : '';
}


/////////////////JPBridgeContext
// var JPBridgeContext = function() {

// }
// JPBridgeContext.prototype = Object.create(JPContext.prototype);
// JPBridgeContext.prototype.parse = function() {
// 	var ctx = this;
// 	var script = '';
// 	while (ctx = ctx.next) {
// 		script += ctx.parse();
// 	}
// 	return script;
// }



var VKRootNode = function(){
	this.requires = [];
	this.classes = {};
	this.protocols = {};
	this.declarations = {};
	
}
VKRootNode.prototype = Object.create(VKGrammerNode.prototype);
VKRootNode.prototype.parse = function(){
	var script = '';

	for (var key in this.classes) {
		var classNode = this.classes[key];
		if (classNode){
			script += classNode.parse();
			script += '\n';
		}
	}
	return script;
}

VKRootNode.prototype.enterClass = function(className){
	if (!this.classes[className]){
		this.classes[className] = new VKClassNode(className);
	}
	return this.classes[className];
}

var VKClassNode = function(className) {
	this.className = className;
	this.classPropertys = [];
	this.instanceMethods = [];
	this.classMethods = [];
	this.ignore = 0;
}
VKClassNode.prototype = Object.create(VKGrammerNode.prototype);
VKClassNode.prototype.parse = function(){
	var script = this.ignore ? '' : "defineClass('" + this.className + "', {";
	for (var i = 0; i < this.instanceMethods.length; i ++) {
		var separator = this.ignore && this.instanceMethods.length <= 1 ? '': ',';
		script += this.instanceMethods[i].parse() + separator;
	}
	script += this.ignore ? '' : '}';
	if (this.classMethods.length) {
		script += this.ignore ? '' : ',{';
		for (var i = 0; i < this.classMethods.length; i ++) {
			var separator = this.ignore && this.classMethods.length <= 1 ? '': ','
			script += this.classMethods[i].parse() + separator;
		}
		script += this.ignore ? '' : '}'
	}
	script += this.ignore ? '' : ');';
	return script;
}


/////////////////JPMethodContext

// var JPMethodContext = function() {
// 	this.names = [];
// 	this.params = [];
// 	this.ignore = 0;
// }
// JPMethodContext.prototype = Object.create(JPContext.prototype);
// JPMethodContext.prototype.parse = function(){
// 	var ctx = this;
// 	var script = this.ignore ? '' : this.names.join('_') + ": function(" + this.params.join(',') + ") {"

// 	while (ctx = ctx.next) {
// 		script += ctx.parse();
// 	} 
// 	script += this.ignore ? '' : '}'
// 	return script;
// }


/////////////////JPMsgContext

// var JPMsgContext = function() {
// 	this.receiver = null;
// 	this.selector = [];
// 	this.preMsg = null;

// 	this.argumentIndex = 0;
// }

// JPMsgContext.prototype = Object.create(JPContext.prototype);

// JPMsgContext.prototype.parse = function() {
// 	var code = '';
// 	if (typeof this.receiver == "string") {
// 		code += this.receiver;
// 	} else {
// 		code += this.receiver.parse();
// 	}

// 	var funcName = [];
// 	var params = [];
// 	for (var i = 0; i < this.selector.length; i ++) {
// 		funcName.push(this.selector[i].name);
// 		if (typeof this.selector[i].param == "string") {
// 			params.push(this.selector[i].param);
// 		} else if (this.selector[i].param) {
// 			params.push(this.selector[i].param.parse());
// 		}
// 	}
// 	code += '|__dot__|' + funcName.join('_') + '(' + params.join(',') + ')';
// 	return code;
// }

/////////////////JPParamContext

// var JPParamContext = function() {
// 	this.parent = null;
// }

// JPParamContext.prototype = Object.create(JPBridgeContext.prototype);


/////////////////JPBlockContext

// var JPBlockContext = function() {
// 	this.types = [];
// 	this.names = [];
// 	this.content = null;
// }

// JPBlockContext.prototype = Object.create(JPContext.prototype);
// JPBlockContext.prototype.parse = function(){
// 	var paramTypes = this.types.length ? "'" + this.types.join(',') + "', " : '';
// 	var script = 'block(' + paramTypes + 'function(' + this.names.join(',') + ') {';
// 	return script + this.content.parse() + "})";
// }


// var JPBlockContentContext = function() {
// 	this.parent = null;
// }

// JPBlockContentContext.prototype = Object.create(JPBridgeContext.prototype);


/////////////////JPAssignContext

// var JPAssignContext = function() {
// 	this.left = null;
// 	this.right = null;
// }

// JPAssignContext.prototype = Object.create(JPContext.prototype);
// JPAssignContext.prototype.parse = function(){
// 	var leftStr = this.left.parse();
// 	var leftArr = leftStr.split('.')
// 	var lastProperty = leftArr.splice(-1);

// 	leftStr = leftArr.join('.') + '|__dot__|' + 'set' + lastProperty[0][0].toUpperCase() + lastProperty[0].substr(1);
// 	return leftStr + '(' + this.right.parse() + ')'
// }



// var JPAssignLeftContext = function() {
// 	this.parent = null;
// }
// JPAssignLeftContext.prototype = Object.create(JPBridgeContext.prototype);


// var JPAssignRightContext = function() {
// 	this.parent = null;
// }
// JPAssignRightContext.prototype = Object.create(JPBridgeContext.prototype);




/////////////////JPDeclarationContext

// var JPDeclarationContext = function() {
// 	this.parent = null;
// }
// JPDeclarationContext.prototype = Object.create(JPContext.prototype);
// JPDeclarationContext.prototype.parse = function(){
// 	return 'var ';
// }


/////////////////exports

exports.VKCommonNode = VKCommonNode;
// exports.JPMsgContext = JPMsgContext;
// exports.JPParamContext = JPParamContext;
// exports.JPBlockContext = JPBlockContext;
// exports.JPBlockContentContext = JPBlockContentContext;
// exports.JPAssignContext = JPAssignContext;
// exports.JPAssignLeftContext = JPAssignLeftContext;
// exports.JPAssignRightContext = JPAssignRightContext;
exports.VKRootNode = VKRootNode;
exports.VKClassNode = VKClassNode;
// exports.JPMethodContext = JPMethodContext;
