var keyMirrorDeep = require('./index');

var DUMMY_CONST = {
    ACTIONS: {
        LOGIN: {
            SUCCESS: null,
            ERROR: undefined
        },
        ACTIONB: [1,2,'ghj']
    },
    EVENTS: {
        A: 123,
        B: 456
    },
    SOMEOTHER: 789
};

var res = keyMirrorDeep(DUMMY_CONST, {
    connChar: '_',
    custFunc: function(oldVal, newVal) {

        // you can do something with const val here
        if(typeof(oldVal) === "number") {
            newVal = newVal + '_' + oldVal
        }

        return newVal;
    }
})

console.log(DUMMY_CONST);
console.log(res);