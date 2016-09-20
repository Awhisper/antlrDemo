
var rf = require("fs");
var data = rf.readFileSync("test.m","utf-8");
var antlr4 = require('./antlr4/index');
var ObjCLexer = require('./antlrLib/ObjectiveCLexer').ObjectiveCLexer
var ObjCParser = require('./antlrLib/ObjectiveCParser').ObjectiveCParser
var ObjCListener = require('./antlrLib/ObjectiveCParserListener').ObjectiveCParserListener

console.log(data);
// var VKErrorListener = require('./listener/VKErrorListener').VKErrorListener
// var VKObjCListener = require('./listener/VKObjCListener').JPObjCListener
// var VKScriptProcessor = require('./listener/JPScriptProcessor').JPScriptProcessor

// var chars = new antlr4.InputStream(data);
// var lexer = new ObjCLexer(chars);
// lexer.addErrorListener(new VKErrorListener(function(e) {
//         console.log('lexer error')
//         console.log(e)
// }));

// var tokens  = new antlr4.CommonTokenStream(lexer);
// var parser = new ObjCParser(tokens);
// parser.addErrorListener(new VKErrorListener(function(e) {
//         console.log('parser error')
//         console.log(e)
// }));
// parser.buildParseTrees = true;
// var tree = parser.translationUnit();

// var listener = new VKObjCListener(function(result){
//         var processor = new VKScriptProcessor(result)
//         console.log(processor.finalScript());
//     });
//     // listener.ignoreClass = ignoreClass;
//     // listener.ignoreMethod = ignoreMethod;
// try {
//         antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
//     } catch(e) {
//         console.log('listener error')
//         console.log(e)
//     }