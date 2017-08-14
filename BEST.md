## Array
#### 把arguments转换为数组
- [from.js](./array/from.js)
``` javascript
Array.prototype.slice.apply(arguments); //bad
Array.from(arguments); //good
```
#### 用for循环来找数组元素
- [find.js](./array/find.js)
``` javascript
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp = ary.indexOf(5); //bad
let temp2 = ary.find(function (value) { 
    return value > 5;
}); //bad
```
#### 使用pop来删除数组最后一个元素
- [pop_splice_slice.js](./array/pop_splice_slice.js)
``` javascript
ary.pop(); //good
```
#### 不要使用forEach
- [forEach.js](./array/forEach.js)
``` javascript
ary.forEach(function (value) { //bad
    console.log(value);
});
```
## Object
#### 不要使用Object.assign
- [assign.js](./object/assign.js)
``` javascript
Object.assign({},obj); //bad 
```
#### 复杂的clone使用json
- [clone.js](./object/clone.js)
``` javascript
JSON.parse(JSON.stringify(obj)); //good
```
#### 通过keys获取所有属性
- [keys.js](./object/keys.js)
``` javascript
Object.keys(obj); //good
```
#### 判断对象为空用keys
- [keys.js](./object/keys.js)
``` javascript
Object.keys(obj).length === 0; //good
```

## String
#### 拼接重复的字符串
- [repeat.js](./string/repeat.js)
``` javascript
"hello".repeat(10); //good
```
#### 去前后空格
- [trim.js](./string/trim.js)
``` javascript
str.trim(); //good，使用原生方法
```
## Number
#### 转int
- [parseInt.js](./number/parseInt.js)
``` javascript
parseInt('120'); //bad
parseInt('120',10); //good，快25%
```
#### 转number
- [toNumber.js](./number/toNumber.js)
``` javascript
let num = -'120.20'; //good，比其他方法快10倍
```

## Function
#### 函数写内部还是外部
- [inside_outside.js](./function/inside_outside.js)
``` javascript
//函数写内部略快于外部。但是如果这个函数调用的多，那就写外部，因为每调用一次就会重新声明一遍。
```

## Path
#### 路径拼接
- [path.js](./node/path.js)
``` javascript
//简单的路径拼接使用字符串拼接的方式
```

