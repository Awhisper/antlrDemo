
var rf = require("fs");
var source = rf.readFileSync("test.m","utf-8");

var Preprocesser = require('./src/VKPreProcesser').VKPreProcesser;
var Convertor = require('./src/VKConvertor').VKConvertor;
var Generator = require('./src/VKGenerator').VKGenerator;
var p_source = Preprocesser.PreProcess(source)

var c_context = Convertor.Convert(p_source,function(tree){
    var result = Generator.Generate(tree);
});






