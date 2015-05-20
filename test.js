var keyMirrorDeep = require('./index');

var DUMMY_CONST = {
    ACTIONS: {
        LOGIN: {
            SUCCESS: null,
            ERROR: undefined
        },
        SOME_OTHER_ACTION: ''
    },
    EVENTS: {
        A: 123,
        B: 456
    },
    SOME_OTHER: 789
};

console.log(keyMirrorDeep(DUMMY_CONST));