const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse');
const generate = require('@babel/generator');
const { types } = require('@babel/core');
const colors = require('colors')

const loose = false;

module.exports = function (content) {
    const ast = parse(content, {
        plugins: [[
            "optionalChaining",
            {}
        ]]
    });

    traverse.default(ast, {
        MemberExpression: function (path) {
            path.replaceWith(
                types.identifier("aaa")
            )
        },
    })

    const { code } = generate.default(ast)

    return code;
}