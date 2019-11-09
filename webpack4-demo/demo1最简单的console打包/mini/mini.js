(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
        }
        
        var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
        };
        
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    }

    return __webpack_require__("./index.js");
})({
    "./index.js": function(module, exports) {
        console.log('🍎🍌🍊')
    }
})