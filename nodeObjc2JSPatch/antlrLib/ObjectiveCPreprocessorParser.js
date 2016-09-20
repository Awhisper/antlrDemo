// Generated from ObjectiveCPreprocessorParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ObjectiveCPreprocessorParserListener = require('./ObjectiveCPreprocessorParserListener').ObjectiveCPreprocessorParserListener;
var grammarFileName = "ObjectiveCPreprocessorParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3*v\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\7\2\20\n\2",
    "\f\2\16\2\23\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\5\3\34\n\3\3\4\6\4\37",
    "\n\4\r\4\16\4 \3\5\3\5\6\5%\n\5\r\5\16\5&\3\5\3\5\3\5\3\5\3\5\3\5\3",
    "\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\6\5\67\n\5\r\5\16\58\3\5\3\5\6\5=\n\5",
    "\r\5\16\5>\3\5\3\5\3\5\7\5D\n\5\f\5\16\5G\13\5\5\5I\n\5\3\6\3\6\3\7",
    "\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7Y\n\7\3\7\3\7\3\7\3",
    "\7\3\7\3\7\3\7\3\7\5\7c\n\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7",
    "\3\7\3\7\7\7q\n\7\f\7\16\7t\13\7\3\7\2\3\f\b\2\4\6\b\n\f\2\6\3\3$$\3",
    "\2\5\6\3\2\27\30\3\2\33\36\u008c\2\21\3\2\2\2\4\33\3\2\2\2\6\36\3\2",
    "\2\2\bH\3\2\2\2\nJ\3\2\2\2\fb\3\2\2\2\16\20\5\4\3\2\17\16\3\2\2\2\20",
    "\23\3\2\2\2\21\17\3\2\2\2\21\22\3\2\2\2\22\24\3\2\2\2\23\21\3\2\2\2",
    "\24\25\7\2\2\3\25\3\3\2\2\2\26\34\5\6\4\2\27\30\7\3\2\2\30\31\5\b\5",
    "\2\31\32\t\2\2\2\32\34\3\2\2\2\33\26\3\2\2\2\33\27\3\2\2\2\34\5\3\2",
    "\2\2\35\37\7\4\2\2\36\35\3\2\2\2\37 \3\2\2\2 \36\3\2\2\2 !\3\2\2\2!",
    "\7\3\2\2\2\"$\t\3\2\2#%\5\n\6\2$#\3\2\2\2%&\3\2\2\2&$\3\2\2\2&\'\3\2",
    "\2\2\'I\3\2\2\2()\7\n\2\2)I\5\f\7\2*+\7\13\2\2+I\5\f\7\2,I\7\f\2\2-",
    "I\7\20\2\2./\7\16\2\2/I\7!\2\2\60\61\7\17\2\2\61I\7!\2\2\62\63\7\r\2",
    "\2\63I\7!\2\2\64\66\7\7\2\2\65\67\5\n\6\2\66\65\3\2\2\2\678\3\2\2\2",
    "8\66\3\2\2\289\3\2\2\29I\3\2\2\2:<\7\23\2\2;=\5\n\6\2<;\3\2\2\2=>\3",
    "\2\2\2><\3\2\2\2>?\3\2\2\2?I\3\2\2\2@A\7\b\2\2AE\7!\2\2BD\5\n\6\2CB",
    "\3\2\2\2DG\3\2\2\2EC\3\2\2\2EF\3\2\2\2FI\3\2\2\2GE\3\2\2\2H\"\3\2\2",
    "\2H(\3\2\2\2H*\3\2\2\2H,\3\2\2\2H-\3\2\2\2H.\3\2\2\2H\60\3\2\2\2H\62",
    "\3\2\2\2H\64\3\2\2\2H:\3\2\2\2H@\3\2\2\2I\t\3\2\2\2JK\7)\2\2K\13\3\2",
    "\2\2LM\b\7\1\2MN\7\24\2\2Nc\5\f\7\bOc\7\21\2\2Pc\7\22\2\2Qc\7\"\2\2",
    "Rc\7 \2\2SX\7!\2\2TU\7\25\2\2UV\5\f\7\2VW\7\26\2\2WY\3\2\2\2XT\3\2\2",
    "\2XY\3\2\2\2Yc\3\2\2\2Z[\7\25\2\2[\\\5\f\7\2\\]\7\26\2\2]c\3\2\2\2^",
    "_\7\t\2\2_`\7\25\2\2`a\7!\2\2ac\7\26\2\2bL\3\2\2\2bO\3\2\2\2bP\3\2\2",
    "\2bQ\3\2\2\2bR\3\2\2\2bS\3\2\2\2bZ\3\2\2\2b^\3\2\2\2cr\3\2\2\2de\f\7",
    "\2\2ef\t\4\2\2fq\5\f\7\bgh\f\6\2\2hi\7\31\2\2iq\5\f\7\7jk\f\5\2\2kl",
    "\7\32\2\2lq\5\f\7\6mn\f\4\2\2no\t\5\2\2oq\5\f\7\5pd\3\2\2\2pg\3\2\2",
    "\2pj\3\2\2\2pm\3\2\2\2qt\3\2\2\2rp\3\2\2\2rs\3\2\2\2s\r\3\2\2\2tr\3",
    "\2\2\2\16\21\33 &8>EHXbpr"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'#'", 'null', 'null', 'null', "'pragma'", 
                     'null', "'defined'", "'if'", "'elif'", "'else'", "'undef'", 
                     "'ifdef'", "'ifndef'", "'endif'", 'null', 'null', "'error'", 
                     "'!'", "'('", "')'", "'=='", "'!='", "'&&'", "'||'", 
                     "'<'", "'>'", "'<='", "'>='" ];

var symbolicNames = [ 'null', "SHARP", "CODE", "IMPORT", "INCLUDE", "PRAGMA", 
                      "DEFINE", "DEFINED", "IF", "ELIF", "ELSE", "UNDEF", 
                      "IFDEF", "IFNDEF", "ENDIF", "TRUE", "FALSE", "ERROR", 
                      "BANG", "LPAREN", "RPAREN", "EQUAL", "NOTEQUAL", "AND", 
                      "OR", "LT", "GT", "LE", "GE", "DIRECTIVE_WHITESPACES", 
                      "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL", "DECIMAL_LITERAL", 
                      "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT", 
                      "DIRECITVE_NEW_LINE", "DIRECITVE_TEXT_NEW_LINE", "TEXT", 
                      "SLASH" ];

var ruleNames =  [ "objectiveCDocument", "text", "code", "directive", "directive_text", 
                   "preprocessor_expression" ];

function ObjectiveCPreprocessorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ObjectiveCPreprocessorParser.prototype = Object.create(antlr4.Parser.prototype);
ObjectiveCPreprocessorParser.prototype.constructor = ObjectiveCPreprocessorParser;

Object.defineProperty(ObjectiveCPreprocessorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ObjectiveCPreprocessorParser.EOF = antlr4.Token.EOF;
ObjectiveCPreprocessorParser.SHARP = 1;
ObjectiveCPreprocessorParser.CODE = 2;
ObjectiveCPreprocessorParser.IMPORT = 3;
ObjectiveCPreprocessorParser.INCLUDE = 4;
ObjectiveCPreprocessorParser.PRAGMA = 5;
ObjectiveCPreprocessorParser.DEFINE = 6;
ObjectiveCPreprocessorParser.DEFINED = 7;
ObjectiveCPreprocessorParser.IF = 8;
ObjectiveCPreprocessorParser.ELIF = 9;
ObjectiveCPreprocessorParser.ELSE = 10;
ObjectiveCPreprocessorParser.UNDEF = 11;
ObjectiveCPreprocessorParser.IFDEF = 12;
ObjectiveCPreprocessorParser.IFNDEF = 13;
ObjectiveCPreprocessorParser.ENDIF = 14;
ObjectiveCPreprocessorParser.TRUE = 15;
ObjectiveCPreprocessorParser.FALSE = 16;
ObjectiveCPreprocessorParser.ERROR = 17;
ObjectiveCPreprocessorParser.BANG = 18;
ObjectiveCPreprocessorParser.LPAREN = 19;
ObjectiveCPreprocessorParser.RPAREN = 20;
ObjectiveCPreprocessorParser.EQUAL = 21;
ObjectiveCPreprocessorParser.NOTEQUAL = 22;
ObjectiveCPreprocessorParser.AND = 23;
ObjectiveCPreprocessorParser.OR = 24;
ObjectiveCPreprocessorParser.LT = 25;
ObjectiveCPreprocessorParser.GT = 26;
ObjectiveCPreprocessorParser.LE = 27;
ObjectiveCPreprocessorParser.GE = 28;
ObjectiveCPreprocessorParser.DIRECTIVE_WHITESPACES = 29;
ObjectiveCPreprocessorParser.DIRECTIVE_STRING = 30;
ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL = 31;
ObjectiveCPreprocessorParser.DECIMAL_LITERAL = 32;
ObjectiveCPreprocessorParser.FLOAT = 33;
ObjectiveCPreprocessorParser.NEW_LINE = 34;
ObjectiveCPreprocessorParser.DIRECITVE_COMMENT = 35;
ObjectiveCPreprocessorParser.DIRECITVE_LINE_COMMENT = 36;
ObjectiveCPreprocessorParser.DIRECITVE_NEW_LINE = 37;
ObjectiveCPreprocessorParser.DIRECITVE_TEXT_NEW_LINE = 38;
ObjectiveCPreprocessorParser.TEXT = 39;
ObjectiveCPreprocessorParser.SLASH = 40;

ObjectiveCPreprocessorParser.RULE_objectiveCDocument = 0;
ObjectiveCPreprocessorParser.RULE_text = 1;
ObjectiveCPreprocessorParser.RULE_code = 2;
ObjectiveCPreprocessorParser.RULE_directive = 3;
ObjectiveCPreprocessorParser.RULE_directive_text = 4;
ObjectiveCPreprocessorParser.RULE_preprocessor_expression = 5;

function ObjectiveCDocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ObjectiveCPreprocessorParser.RULE_objectiveCDocument;
    return this;
}

ObjectiveCDocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectiveCDocumentContext.prototype.constructor = ObjectiveCDocumentContext;

ObjectiveCDocumentContext.prototype.EOF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.EOF, 0);
};

ObjectiveCDocumentContext.prototype.text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TextContext);
    } else {
        return this.getTypedRuleContext(TextContext,i);
    }
};

ObjectiveCDocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterObjectiveCDocument(this);
	}
};

ObjectiveCDocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitObjectiveCDocument(this);
	}
};




ObjectiveCPreprocessorParser.ObjectiveCDocumentContext = ObjectiveCDocumentContext;

ObjectiveCPreprocessorParser.prototype.objectiveCDocument = function() {

    var localctx = new ObjectiveCDocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ObjectiveCPreprocessorParser.RULE_objectiveCDocument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ObjectiveCPreprocessorParser.SHARP || _la===ObjectiveCPreprocessorParser.CODE) {
            this.state = 12;
            this.text();
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 18;
        this.match(ObjectiveCPreprocessorParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ObjectiveCPreprocessorParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

TextContext.prototype.SHARP = function() {
    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
};

TextContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

TextContext.prototype.NEW_LINE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.NEW_LINE, 0);
};

TextContext.prototype.EOF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.EOF, 0);
};

TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitText(this);
	}
};




ObjectiveCPreprocessorParser.TextContext = TextContext;

ObjectiveCPreprocessorParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ObjectiveCPreprocessorParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.state = 25;
        switch(this._input.LA(1)) {
        case ObjectiveCPreprocessorParser.CODE:
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.code();
            break;
        case ObjectiveCPreprocessorParser.SHARP:
            this.enterOuterAlt(localctx, 2);
            this.state = 21;
            this.match(ObjectiveCPreprocessorParser.SHARP);
            this.state = 22;
            this.directive();
            this.state = 23;
            _la = this._input.LA(1);
            if(!(_la===ObjectiveCPreprocessorParser.EOF || _la===ObjectiveCPreprocessorParser.NEW_LINE)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ObjectiveCPreprocessorParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.CODE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ObjectiveCPreprocessorParser.CODE);
    } else {
        return this.getToken(ObjectiveCPreprocessorParser.CODE, i);
    }
};


CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitCode(this);
	}
};




ObjectiveCPreprocessorParser.CodeContext = CodeContext;

ObjectiveCPreprocessorParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ObjectiveCPreprocessorParser.RULE_code);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 27;
        		this.match(ObjectiveCPreprocessorParser.CODE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 30; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ObjectiveCPreprocessorParser.RULE_directive;
    return this;
}

DirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectiveContext.prototype.constructor = DirectiveContext;


 
DirectiveContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PreprocessorDefContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorDefContext.prototype = Object.create(DirectiveContext.prototype);
PreprocessorDefContext.prototype.constructor = PreprocessorDefContext;

ObjectiveCPreprocessorParser.PreprocessorDefContext = PreprocessorDefContext;

PreprocessorDefContext.prototype.IFDEF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.IFDEF, 0);
};

PreprocessorDefContext.prototype.CONDITIONAL_SYMBOL = function() {
    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
};

PreprocessorDefContext.prototype.IFNDEF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.IFNDEF, 0);
};

PreprocessorDefContext.prototype.UNDEF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.UNDEF, 0);
};
PreprocessorDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorDef(this);
	}
};

PreprocessorDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorDef(this);
	}
};


function PreprocessorErrorContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorErrorContext.prototype = Object.create(DirectiveContext.prototype);
PreprocessorErrorContext.prototype.constructor = PreprocessorErrorContext;

ObjectiveCPreprocessorParser.PreprocessorErrorContext = PreprocessorErrorContext;

PreprocessorErrorContext.prototype.ERROR = function() {
    return this.getToken(ObjectiveCPreprocessorParser.ERROR, 0);
};

PreprocessorErrorContext.prototype.directive_text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Directive_textContext);
    } else {
        return this.getTypedRuleContext(Directive_textContext,i);
    }
};
PreprocessorErrorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorError(this);
	}
};

PreprocessorErrorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorError(this);
	}
};


function PreprocessorConditionalContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorConditionalContext.prototype = Object.create(DirectiveContext.prototype);
PreprocessorConditionalContext.prototype.constructor = PreprocessorConditionalContext;

ObjectiveCPreprocessorParser.PreprocessorConditionalContext = PreprocessorConditionalContext;

PreprocessorConditionalContext.prototype.IF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.IF, 0);
};

PreprocessorConditionalContext.prototype.preprocessor_expression = function() {
    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
};

PreprocessorConditionalContext.prototype.ELIF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.ELIF, 0);
};

PreprocessorConditionalContext.prototype.ELSE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.ELSE, 0);
};

PreprocessorConditionalContext.prototype.ENDIF = function() {
    return this.getToken(ObjectiveCPreprocessorParser.ENDIF, 0);
};
PreprocessorConditionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorConditional(this);
	}
};

PreprocessorConditionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorConditional(this);
	}
};


function PreprocessorImportContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorImportContext.prototype = Object.create(DirectiveContext.prototype);
PreprocessorImportContext.prototype.constructor = PreprocessorImportContext;

ObjectiveCPreprocessorParser.PreprocessorImportContext = PreprocessorImportContext;

PreprocessorImportContext.prototype.IMPORT = function() {
    return this.getToken(ObjectiveCPreprocessorParser.IMPORT, 0);
};

PreprocessorImportContext.prototype.INCLUDE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.INCLUDE, 0);
};

PreprocessorImportContext.prototype.directive_text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Directive_textContext);
    } else {
        return this.getTypedRuleContext(Directive_textContext,i);
    }
};
PreprocessorImportContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorImport(this);
	}
};

PreprocessorImportContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorImport(this);
	}
};


function PreprocessorPragmaContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorPragmaContext.prototype = Object.create(DirectiveContext.prototype);
PreprocessorPragmaContext.prototype.constructor = PreprocessorPragmaContext;

ObjectiveCPreprocessorParser.PreprocessorPragmaContext = PreprocessorPragmaContext;

PreprocessorPragmaContext.prototype.PRAGMA = function() {
    return this.getToken(ObjectiveCPreprocessorParser.PRAGMA, 0);
};

PreprocessorPragmaContext.prototype.directive_text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Directive_textContext);
    } else {
        return this.getTypedRuleContext(Directive_textContext,i);
    }
};
PreprocessorPragmaContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorPragma(this);
	}
};

PreprocessorPragmaContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorPragma(this);
	}
};


function PreprocessorDefineContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorDefineContext.prototype = Object.create(DirectiveContext.prototype);
PreprocessorDefineContext.prototype.constructor = PreprocessorDefineContext;

ObjectiveCPreprocessorParser.PreprocessorDefineContext = PreprocessorDefineContext;

PreprocessorDefineContext.prototype.DEFINE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.DEFINE, 0);
};

PreprocessorDefineContext.prototype.CONDITIONAL_SYMBOL = function() {
    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
};

PreprocessorDefineContext.prototype.directive_text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Directive_textContext);
    } else {
        return this.getTypedRuleContext(Directive_textContext,i);
    }
};
PreprocessorDefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorDefine(this);
	}
};

PreprocessorDefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorDefine(this);
	}
};



ObjectiveCPreprocessorParser.DirectiveContext = DirectiveContext;

ObjectiveCPreprocessorParser.prototype.directive = function() {

    var localctx = new DirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ObjectiveCPreprocessorParser.RULE_directive);
    var _la = 0; // Token type
    try {
        this.state = 70;
        switch(this._input.LA(1)) {
        case ObjectiveCPreprocessorParser.IMPORT:
        case ObjectiveCPreprocessorParser.INCLUDE:
            localctx = new PreprocessorImportContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            _la = this._input.LA(1);
            if(!(_la===ObjectiveCPreprocessorParser.IMPORT || _la===ObjectiveCPreprocessorParser.INCLUDE)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 34; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 33;
                this.directive_text();
                this.state = 36; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===ObjectiveCPreprocessorParser.TEXT);
            break;
        case ObjectiveCPreprocessorParser.IF:
            localctx = new PreprocessorConditionalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 38;
            this.match(ObjectiveCPreprocessorParser.IF);
            this.state = 39;
            this.preprocessor_expression(0);
            break;
        case ObjectiveCPreprocessorParser.ELIF:
            localctx = new PreprocessorConditionalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 40;
            this.match(ObjectiveCPreprocessorParser.ELIF);
            this.state = 41;
            this.preprocessor_expression(0);
            break;
        case ObjectiveCPreprocessorParser.ELSE:
            localctx = new PreprocessorConditionalContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 42;
            this.match(ObjectiveCPreprocessorParser.ELSE);
            break;
        case ObjectiveCPreprocessorParser.ENDIF:
            localctx = new PreprocessorConditionalContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 43;
            this.match(ObjectiveCPreprocessorParser.ENDIF);
            break;
        case ObjectiveCPreprocessorParser.IFDEF:
            localctx = new PreprocessorDefContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 44;
            this.match(ObjectiveCPreprocessorParser.IFDEF);
            this.state = 45;
            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
            break;
        case ObjectiveCPreprocessorParser.IFNDEF:
            localctx = new PreprocessorDefContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 46;
            this.match(ObjectiveCPreprocessorParser.IFNDEF);
            this.state = 47;
            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
            break;
        case ObjectiveCPreprocessorParser.UNDEF:
            localctx = new PreprocessorDefContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 48;
            this.match(ObjectiveCPreprocessorParser.UNDEF);
            this.state = 49;
            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
            break;
        case ObjectiveCPreprocessorParser.PRAGMA:
            localctx = new PreprocessorPragmaContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 50;
            this.match(ObjectiveCPreprocessorParser.PRAGMA);
            this.state = 52; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 51;
                this.directive_text();
                this.state = 54; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===ObjectiveCPreprocessorParser.TEXT);
            break;
        case ObjectiveCPreprocessorParser.ERROR:
            localctx = new PreprocessorErrorContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 56;
            this.match(ObjectiveCPreprocessorParser.ERROR);
            this.state = 58; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 57;
                this.directive_text();
                this.state = 60; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===ObjectiveCPreprocessorParser.TEXT);
            break;
        case ObjectiveCPreprocessorParser.DEFINE:
            localctx = new PreprocessorDefineContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 62;
            this.match(ObjectiveCPreprocessorParser.DEFINE);
            this.state = 63;
            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ObjectiveCPreprocessorParser.TEXT) {
                this.state = 64;
                this.directive_text();
                this.state = 69;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Directive_textContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ObjectiveCPreprocessorParser.RULE_directive_text;
    return this;
}

Directive_textContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Directive_textContext.prototype.constructor = Directive_textContext;

Directive_textContext.prototype.TEXT = function() {
    return this.getToken(ObjectiveCPreprocessorParser.TEXT, 0);
};

Directive_textContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterDirective_text(this);
	}
};

Directive_textContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitDirective_text(this);
	}
};




ObjectiveCPreprocessorParser.Directive_textContext = Directive_textContext;

ObjectiveCPreprocessorParser.prototype.directive_text = function() {

    var localctx = new Directive_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ObjectiveCPreprocessorParser.RULE_directive_text);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(ObjectiveCPreprocessorParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Preprocessor_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ObjectiveCPreprocessorParser.RULE_preprocessor_expression;
    return this;
}

Preprocessor_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Preprocessor_expressionContext.prototype.constructor = Preprocessor_expressionContext;


 
Preprocessor_expressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function PreprocessorNotContext(parser, ctx) {
	Preprocessor_expressionContext.call(this, parser);
    Preprocessor_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorNotContext.prototype = Object.create(Preprocessor_expressionContext.prototype);
PreprocessorNotContext.prototype.constructor = PreprocessorNotContext;

ObjectiveCPreprocessorParser.PreprocessorNotContext = PreprocessorNotContext;

PreprocessorNotContext.prototype.BANG = function() {
    return this.getToken(ObjectiveCPreprocessorParser.BANG, 0);
};

PreprocessorNotContext.prototype.preprocessor_expression = function() {
    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
};
PreprocessorNotContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorNot(this);
	}
};

PreprocessorNotContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorNot(this);
	}
};


function PreprocessorParenthesisContext(parser, ctx) {
	Preprocessor_expressionContext.call(this, parser);
    Preprocessor_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorParenthesisContext.prototype = Object.create(Preprocessor_expressionContext.prototype);
PreprocessorParenthesisContext.prototype.constructor = PreprocessorParenthesisContext;

ObjectiveCPreprocessorParser.PreprocessorParenthesisContext = PreprocessorParenthesisContext;

PreprocessorParenthesisContext.prototype.LPAREN = function() {
    return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0);
};

PreprocessorParenthesisContext.prototype.preprocessor_expression = function() {
    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
};

PreprocessorParenthesisContext.prototype.RPAREN = function() {
    return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0);
};
PreprocessorParenthesisContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorParenthesis(this);
	}
};

PreprocessorParenthesisContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorParenthesis(this);
	}
};


function PreprocessorBinaryContext(parser, ctx) {
	Preprocessor_expressionContext.call(this, parser);
    this.op = null; // Token;
    Preprocessor_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorBinaryContext.prototype = Object.create(Preprocessor_expressionContext.prototype);
PreprocessorBinaryContext.prototype.constructor = PreprocessorBinaryContext;

ObjectiveCPreprocessorParser.PreprocessorBinaryContext = PreprocessorBinaryContext;

PreprocessorBinaryContext.prototype.preprocessor_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Preprocessor_expressionContext);
    } else {
        return this.getTypedRuleContext(Preprocessor_expressionContext,i);
    }
};

PreprocessorBinaryContext.prototype.EQUAL = function() {
    return this.getToken(ObjectiveCPreprocessorParser.EQUAL, 0);
};

PreprocessorBinaryContext.prototype.NOTEQUAL = function() {
    return this.getToken(ObjectiveCPreprocessorParser.NOTEQUAL, 0);
};

PreprocessorBinaryContext.prototype.AND = function() {
    return this.getToken(ObjectiveCPreprocessorParser.AND, 0);
};

PreprocessorBinaryContext.prototype.OR = function() {
    return this.getToken(ObjectiveCPreprocessorParser.OR, 0);
};

PreprocessorBinaryContext.prototype.LT = function() {
    return this.getToken(ObjectiveCPreprocessorParser.LT, 0);
};

PreprocessorBinaryContext.prototype.GT = function() {
    return this.getToken(ObjectiveCPreprocessorParser.GT, 0);
};

PreprocessorBinaryContext.prototype.LE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.LE, 0);
};

PreprocessorBinaryContext.prototype.GE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.GE, 0);
};
PreprocessorBinaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorBinary(this);
	}
};

PreprocessorBinaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorBinary(this);
	}
};


function PreprocessorConstantContext(parser, ctx) {
	Preprocessor_expressionContext.call(this, parser);
    Preprocessor_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorConstantContext.prototype = Object.create(Preprocessor_expressionContext.prototype);
PreprocessorConstantContext.prototype.constructor = PreprocessorConstantContext;

ObjectiveCPreprocessorParser.PreprocessorConstantContext = PreprocessorConstantContext;

PreprocessorConstantContext.prototype.TRUE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.TRUE, 0);
};

PreprocessorConstantContext.prototype.FALSE = function() {
    return this.getToken(ObjectiveCPreprocessorParser.FALSE, 0);
};

PreprocessorConstantContext.prototype.DECIMAL_LITERAL = function() {
    return this.getToken(ObjectiveCPreprocessorParser.DECIMAL_LITERAL, 0);
};

PreprocessorConstantContext.prototype.DIRECTIVE_STRING = function() {
    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_STRING, 0);
};
PreprocessorConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorConstant(this);
	}
};

PreprocessorConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorConstant(this);
	}
};


function PreprocessorConditionalSymbolContext(parser, ctx) {
	Preprocessor_expressionContext.call(this, parser);
    Preprocessor_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorConditionalSymbolContext.prototype = Object.create(Preprocessor_expressionContext.prototype);
PreprocessorConditionalSymbolContext.prototype.constructor = PreprocessorConditionalSymbolContext;

ObjectiveCPreprocessorParser.PreprocessorConditionalSymbolContext = PreprocessorConditionalSymbolContext;

PreprocessorConditionalSymbolContext.prototype.CONDITIONAL_SYMBOL = function() {
    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
};

PreprocessorConditionalSymbolContext.prototype.LPAREN = function() {
    return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0);
};

PreprocessorConditionalSymbolContext.prototype.preprocessor_expression = function() {
    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
};

PreprocessorConditionalSymbolContext.prototype.RPAREN = function() {
    return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0);
};
PreprocessorConditionalSymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorConditionalSymbol(this);
	}
};

PreprocessorConditionalSymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorConditionalSymbol(this);
	}
};


function PreprocessorDefinedContext(parser, ctx) {
	Preprocessor_expressionContext.call(this, parser);
    Preprocessor_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreprocessorDefinedContext.prototype = Object.create(Preprocessor_expressionContext.prototype);
PreprocessorDefinedContext.prototype.constructor = PreprocessorDefinedContext;

ObjectiveCPreprocessorParser.PreprocessorDefinedContext = PreprocessorDefinedContext;

PreprocessorDefinedContext.prototype.DEFINED = function() {
    return this.getToken(ObjectiveCPreprocessorParser.DEFINED, 0);
};

PreprocessorDefinedContext.prototype.LPAREN = function() {
    return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0);
};

PreprocessorDefinedContext.prototype.CONDITIONAL_SYMBOL = function() {
    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
};

PreprocessorDefinedContext.prototype.RPAREN = function() {
    return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0);
};
PreprocessorDefinedContext.prototype.enterRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.enterPreprocessorDefined(this);
	}
};

PreprocessorDefinedContext.prototype.exitRule = function(listener) {
    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
        listener.exitPreprocessorDefined(this);
	}
};



ObjectiveCPreprocessorParser.prototype.preprocessor_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Preprocessor_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, ObjectiveCPreprocessorParser.RULE_preprocessor_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        switch(this._input.LA(1)) {
        case ObjectiveCPreprocessorParser.BANG:
            localctx = new PreprocessorNotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 75;
            this.match(ObjectiveCPreprocessorParser.BANG);
            this.state = 76;
            this.preprocessor_expression(6);
            break;
        case ObjectiveCPreprocessorParser.TRUE:
            localctx = new PreprocessorConstantContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 77;
            this.match(ObjectiveCPreprocessorParser.TRUE);
            break;
        case ObjectiveCPreprocessorParser.FALSE:
            localctx = new PreprocessorConstantContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 78;
            this.match(ObjectiveCPreprocessorParser.FALSE);
            break;
        case ObjectiveCPreprocessorParser.DECIMAL_LITERAL:
            localctx = new PreprocessorConstantContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 79;
            this.match(ObjectiveCPreprocessorParser.DECIMAL_LITERAL);
            break;
        case ObjectiveCPreprocessorParser.DIRECTIVE_STRING:
            localctx = new PreprocessorConstantContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 80;
            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_STRING);
            break;
        case ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL:
            localctx = new PreprocessorConditionalSymbolContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 81;
            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
            this.state = 86;
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 82;
                this.match(ObjectiveCPreprocessorParser.LPAREN);
                this.state = 83;
                this.preprocessor_expression(0);
                this.state = 84;
                this.match(ObjectiveCPreprocessorParser.RPAREN);

            }
            break;
        case ObjectiveCPreprocessorParser.LPAREN:
            localctx = new PreprocessorParenthesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 88;
            this.match(ObjectiveCPreprocessorParser.LPAREN);
            this.state = 89;
            this.preprocessor_expression(0);
            this.state = 90;
            this.match(ObjectiveCPreprocessorParser.RPAREN);
            break;
        case ObjectiveCPreprocessorParser.DEFINED:
            localctx = new PreprocessorDefinedContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 92;
            this.match(ObjectiveCPreprocessorParser.DEFINED);
            this.state = 93;
            this.match(ObjectiveCPreprocessorParser.LPAREN);
            this.state = 94;
            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
            this.state = 95;
            this.match(ObjectiveCPreprocessorParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 112;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 110;
                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                    this.state = 98;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 99;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ObjectiveCPreprocessorParser.EQUAL || _la===ObjectiveCPreprocessorParser.NOTEQUAL)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 100;
                    this.preprocessor_expression(6);
                    break;

                case 2:
                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                    this.state = 101;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 102;
                    localctx.op = this.match(ObjectiveCPreprocessorParser.AND);
                    this.state = 103;
                    this.preprocessor_expression(5);
                    break;

                case 3:
                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                    this.state = 104;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 105;
                    localctx.op = this.match(ObjectiveCPreprocessorParser.OR);
                    this.state = 106;
                    this.preprocessor_expression(4);
                    break;

                case 4:
                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
                    this.state = 107;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 108;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ObjectiveCPreprocessorParser.LT) | (1 << ObjectiveCPreprocessorParser.GT) | (1 << ObjectiveCPreprocessorParser.LE) | (1 << ObjectiveCPreprocessorParser.GE))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 109;
                    this.preprocessor_expression(3);
                    break;

                } 
            }
            this.state = 114;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


ObjectiveCPreprocessorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.preprocessor_expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ObjectiveCPreprocessorParser.prototype.preprocessor_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ObjectiveCPreprocessorParser = ObjectiveCPreprocessorParser;
