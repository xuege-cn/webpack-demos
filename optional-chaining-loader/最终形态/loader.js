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
        OptionalMemberExpression: function (path) {
            const { parentPath, scope } = path;

            // person.school?.highSchool => person.school.highSchool
            path.node.type = "MemberExpression";

            // var _person$school;
            // const highSchool = _person$school.highSchool;
            const chain = path.node['object'];
            let ref = scope.maybeGenerateMemoised(chain);
            check = types.assignmentExpression(
                "=",
                types.cloneNode(ref),
                chain,
            );
            path.node['object'] = ref;
            
            // const highSchool = (_person$school = person.school) === null || _person$school === void 0 ? void 0 : _person$school.highSchool;
            path.replaceWith(
                types.conditionalExpression(
                    types.logicalExpression(
                        "||",
                        types.binaryExpression(
                            "===",
                            types.cloneNode(check),
                            types.nullLiteral(),
                        ),
                        types.binaryExpression(
                            "===",
                            types.cloneNode(ref),
                            scope.buildUndefinedNode(),
                        ),
                    ),
                    scope.buildUndefinedNode(),
                    path.node,
                ),
            );
        }
    })

    const { code } = generate.default(ast)

    return code;
}