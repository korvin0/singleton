## Install:

```bash
npm install just-singleton
```

## Example of usage:

```js
var singleton = require('just-singleton');

(function() {
    function MyClass() {
        this.name = 'a1';
    }

    var a1 = singleton(MyClass);
    var a2 = singleton(MyClass);
    console.log(a1); // { name: 'a1' }
    console.log(a2); // { name: 'a1' }
    a1.name = 'a3';
    console.log(a1); // { name: 'a3' }
    console.log(a2); // { name: 'a3' }
    
    console.log(a1 === a2) // true
})();
```