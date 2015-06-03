[![NPM](https://nodei.co/npm-dl/key-mirror-nested.png?months=1)](https://nodei.co/npm-dl/key-mirror-nested.png?months=9)

# Key Mirror Nested

Tiny helper to create const in js, just like react/lib/keyMirror, but support nested object and more features.

## Install

`npm install key-mirror-nested --save-dev`

## Usage

``` js
var keyMirror = require('key-mirror-nested');

var options = {
    connChar: '.',
    // connect char, default use '.'
    custFunc: function(oldVal, newVal) {
        return newVal;
    }
    // cust const val before replace
};

var OUTPUT_OBJ = keyMirror(inputObj, options);
```

## Example

``` js
var keyMirror = require('key-mirror-nested');

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
with options:
``` js
var keyMirror = require('key-mirror-nested');

var DUMMY_CONST = {
    ACTIONS: {
        LOGIN: {
            SUCCESS: null,
            ERROR: undefined
        },
        ACTIONB: ''
    },
    EVENTS: {
        A: 123,
        B: 456
    },
    SOMEOTHER: 789
};

console.log(keyMirrorDeep(DUMMY_CONST, {
    connChar: '_',
    custFunc: function(oldVal, newVal) {

        // you can do something with const val here
        if(typeof(oldVal) === "number") {
            newVal = newVal + '_' + oldVal
        }

        return newVal;
    }
}));

/*
=>
{ 
    ACTIONS: { 
        LOGIN: { 
            SUCCESS: 'ACTIONS_LOGIN_SUCCESS',
            ERROR: 'ACTIONS_LOGIN_ERROR' 
        },
        ACTIONB: 'ACTIONS_ACTIONB' 
    },
    EVENTS: { 
        A: 'EVENTS_A_123', 
        B: 'EVENTS_B_456' 
    },
    SOMEOTHER: 'SOMEOTHER_789' 
}
*/

```


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/apolkingg8/keymirrornested/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

