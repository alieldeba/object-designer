# <h1 align="center">Object Designer (Beta)</h1>

#### <h3 align="center"> This package started in <date>2023/7/7</date> and the author is alieldeba </h3>

### Use Casses

- Changing object formate
- Limiting object fields

### Examples

```js
var objectDesigner = require("object-designer");

var array1 = ["name", "age"];
var obj1 = { name: "John Doe", age: 30, email: "johndoe@example.com" };
console.log(objectDesigner(array1, obj1)); // { name: "John Doe", age: 30 }

var array2 = ["age", "name"];
var obj2 = { name: "John Doe", age: 30, email: "johndoe@example.com" };
console.log(objectDesigner(array2, obj2)); // { age: 30, name: "John Doe" }
```
