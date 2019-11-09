(function(modules){
    const cache = {};

    function __require__(moduleId){
        if(moduleId in cache){
            return cache[moduleId]
        }

        const module = {
            exports: {}
        }

        modules[moduleId].call(module.exports, module, module.exports, __require__)

        return module.exports;
    }

    __require__('./index.js')
})({
    './index.js': function(module, exports, require){
        const { name } = require('./data.js')
        console.log(name)
    },
    './data.js': function(modulke, exports, require){
        exports.name = 'xuqiang'
    }
})