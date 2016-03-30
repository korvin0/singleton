module.exports = sigleton;

sigleton = (function() {
    var instance = [];
    
    function createInstance(classname) {
        return new classname();
    }
    
    return function(classname) {
        if (instance[classname] === undefined) {
            instance[classname] = createInstance(classname);
        }
        
        return instance[classname];
    }
})();