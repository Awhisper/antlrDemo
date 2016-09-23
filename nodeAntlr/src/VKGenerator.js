var VKGenerator = function() {

}

VKGenerator.Generate = function(node){
    var script = '';
    script += node.parse();
    console.log(script);
    return script;
}

exports.VKGenerator = VKGenerator;