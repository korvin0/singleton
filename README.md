## Example of usage:

```js
(function() {
    function MyClass() {
        this.name = 'a1';
    }

    var a1 = Sigleton(MyClass);
    var a2 = Sigleton(MyClass);
    console.log(a1); // MyClass {name: "a1"}
    console.log(a2); // MyClass {name: "a1"}
    a1.name = 'a3';
    console.log(a1); // MyClass {name: "a3"}
    console.log(a2); // MyClass {name: "a3"}
})();
```