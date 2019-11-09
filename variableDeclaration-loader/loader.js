const loaderUtils = require('loader-utils');
const { parse } = require("@babel/parser"); 
const generate = require("@babel/generator")
const traverse = require("@babel/traverse")

module.exports = function(content, map, meta) {
    console.log('内容', content);

    const ast = parse(content);
    const name = this.data.name;

    traverse.default(ast, {
        VariableDeclaration(path){
            path.node.kind = 'var'
        },
        StringLiteral(path){
            path.node.value = name
        },
    })

    const { code } = generate.default(ast)

    return code;
}

module.exports.pitch = function(p, r, data){
    const option = loaderUtils.getOptions(this);
    console.log('参数', option)
    data.name = option.name;
}