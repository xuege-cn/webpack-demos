(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
        }
        
        var module = installedModules[moduleId] = {
			exports: {}
        };
        
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        return module.exports;
    }

    return __webpack_require__("./index.js");
})({
    "./data.js": function(module , __webpack_exports__, __webpack_require__) {
        const data = '🍎🍌🍊'
        __webpack_exports__.data = data
    },
    "./index.js": function(module , __webpack_exports__, __webpack_require__) {
        document.body.addEventListener('click', function(){
            Promise.resolve().then(
                __webpack_require__.bind(null, "./data.js")
            ).then(
                function({ data }){
                    console.log(data)
                }
            )
        });
    }
})