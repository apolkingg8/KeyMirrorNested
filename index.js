var objToKeyPath = function(obj, path) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof(obj[key]) === "object" && obj[key] !== null) {
                objToKeyPath(obj[key], path + (path ? '.' : '') + key);
            } else {
                obj[key] = (path + '.' + key).replace(/^\.+/, '')
            }
        }
    }
};

var keyMirrorDeep = function(obj) {
    if(!(obj instanceof Object) || (Array.isArray(obj))) {
        throw new Error('keyMirrorDeep(...): Argument must be an object.');
    } else {
        objToKeyPath(obj, '');
    }

    return obj
};

module.exports = keyMirrorDeep;