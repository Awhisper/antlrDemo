var VKConvertor = function() {

}

VKConvertor.Convert = function(content){

    var antlr4 = require('.././antlr4/index');
    var ObjCLexer = require('.././antlrLib/ObjectiveCLexer').ObjectiveCLexer
    var ObjCParser = require('.././antlrLib/ObjectiveCParser').ObjectiveCParser
    var ConsoleErrorListener = require('.././antlr4/error/ErrorListener').ConsoleErrorListener.INSTANCE

    var VKObjCParserListener = require('./VKObjCParserListener').VKObjCParserListener

    var chars = new antlr4.InputStream(content);
    var lexer = new ObjCLexer(chars);
    lexer.addErrorListener(ConsoleErrorListener);

    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new ObjCParser(tokens);
    parser.addErrorListener(ConsoleErrorListener);
    parser.buildParseTrees = true;
    var tree = parser.translationUnit();

    var listener = new VKObjCParserListener(function(result){
            console.log('parse final!!!!');
    });
        
    try {
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    } catch(e) {
        console.log('listener error')
        console.log(e)
    }
    return content;
}

exports.VKConvertor = VKConvertor;