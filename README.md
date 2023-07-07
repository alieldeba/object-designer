# <center>Object Designer 😳</center>

#### <center> This package started in <date>2023/7/7</date> and the author is alieldeba </center>

### Use Casses

- Changing object formate
- Limiting object fields

### Examples

```
const array1 = ["name", "age"];
const obj1 = {"name": "John Doe", "age": 30, "email": "johndoe@example.com"};
const newObj1 = objectDesigner(array1, obj1);
console.log(newObj1); // { name: "John Doe", age: 30 }
const array2 = ["age", "name"];
const obj2 = {"name": "John Doe", "age": 30, "email": "johndoe@example.com"};
const newObj2 = objectDesigner(array2, obj2);
console.log(newObj2); // { age: 30, name: "John Doe" }
```
