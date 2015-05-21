#Key Mirror Nested
Tiny Helper to create const in js, just like react/lib/keyMirror, but support nested objects.

##Install
`npm install key-mirror-nested --save-dev`

##Usage
```js
var keyMirror = require('key-mirror-nested');

var DUMMY_CONST = {
    ACTIONS: {
        LOGIN: {
            SUCCESS: null, // you can set any value, however they will be replaced.
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
/*
=>
{ 
    ACTIONS: { 
        LOGIN: { 
            SUCCESS: 'ACTIONS.LOGIN.SUCCESS',
            ERROR: 'ACTIONS.LOGIN.ERROR' 
        },
        SOME_OTHER_ACTION: 'ACTIONS.SOME_OTHER_ACTION' 
    },
    EVENTS: { 
        A: 'EVENTS.A', 
        B: 'EVENTS.B' 
    },
    SOME_OTHER: 'SOME_OTHER' 
}
*/
```

##License
[MIT](http://www.opensource.org/licenses/mit-license.php)

