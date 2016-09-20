
var rf = require("fs");
var data = rf.readFileSync("test.m","utf-8");
var antlr4 = require('./antlr4/index');
var ObjCLexer = require('./antlrLib/ObjectiveCLexer').ObjectiveCLexer
var ObjCParser = require('./antlrLib/ObjectiveCParser').ObjectiveCParser
var ObjCListener = require('./antlrLib/ObjectiveCParserListener').ObjectiveCParserListener
var ConsoleErrorListener = require('./antlr4/error/ErrorListener').ConsoleErrorListener.INSTANCE

var VKObjCListener = require('./src/VKObjCListener').JPObjCListener
var VKScriptProcessor = require('./src/JPScriptProcessor').JPScriptProcessor

var chars = new antlr4.InputStream(data);
var lexer = new ObjCLexer(chars);
lexer.addErrorListener(ConsoleErrorListener);

var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new ObjCParser(tokens);
parser.addErrorListener(ConsoleErrorListener);
parser.buildParseTrees = true;
var tree = parser.translationUnit();

var listener = new VKObjCListener(function(result){
        var processor = new VKScriptProcessor(result)
        console.log(processor.finalScript());
});
    
try {
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    } catch(e) {
        console.log('listener error')
        console.log(e)
    }