
var isObj = function(value) {
    var type = typeof value;
    return !!value && (type == 'object') && !(value instanceof Array)
};

var objToKeyPath = function(obj, path, connChar, custFunc) {

    for (var key in obj) {

        if (obj.hasOwnProperty(key)) {

            if (isObj(obj[key])) {
                objToKeyPath(obj[key], path + (path ? connChar : '') + key, connChar, custFunc);
            } else {
                obj[key] = custFunc(obj[key], path + (path ? connChar : '') + key)
            }
        }
    }
};

var keyMirrorDeep = function(obj, opt) {

    if(!isObj(obj)) {
        throw new Error('keyMirrorDeep(...): Argument must be an object.');
    } else {
        var connChar = '.';
        var custFunc = function(oldVal, newVal) {
            return newVal;
        };

        if(isObj(opt)) {

            if((typeof(opt['connChar']) === "string") && (opt['connChar'].length > 0)) {
                connChar = opt['connChar'];
            }

            if(typeof(opt['custFunc']) === "function") {
                custFunc = opt['custFunc'];
            }
        }

        objToKeyPath(obj, '', connChar, custFunc);
    }

    return obj
};

module.exports = keyMirrorDeep;