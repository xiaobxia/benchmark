### 数组
#### 把arguments转换为数组
``` javascript
Array.from(arguments); //good
```
#### 用for循环来找数组元素
``` javascript
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp = ary.indexOf(5); //bad
let temp2 = ary.find(function (value) { 
    return value > 5;
}); //bad
```
#### 使用pop来删除数组最后一个元素
``` javascript
ary.pop(); //good
```
### object
#### 不要使用Object.assign
``` javascript
Object.assign({},obj); //bad 
```
#### 通过keys获取所有属性
``` javascript
Object.keys(obj); //good
```

### 字符串
#### 拼接重复的字符串
``` javascript
"hello".repeat(10); //good
```
