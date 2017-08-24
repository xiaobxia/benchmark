## ES5函数

### Array

#### - [find](./array/find.js)
``` shells
Array#find x 5,610,617 ops/sec ±2.84% (82 runs sampled)
For x 22,286,619 ops/sec ±3.44% (82 runs sampled)
Fastest is For
```
#### - [push](./array/push.js)
``` shell
Array#push x 8,869,422 ops/sec ±1.35% (85 runs sampled)
For x 9,491,719 ops/sec ±1.54% (87 runs sampled)
Fastest is For
```
#### - [indexOf](./array/indexOf.js)
``` shell
Array#indexOf x 17,748,665 ops/sec ±1.63% (84 runs sampled)
For x 28,792,256 ops/sec ±1.57% (81 runs sampled)
Fastest is For
```
#### - [pop_splice_slice](./array/pop_splice_slice.js)
``` shell
Array#pop x 40,860,091 ops/sec ±1.42% (88 runs sampled)
Array#splice x 5,278,594 ops/sec ±1.33% (91 runs sampled)
Array#slice x 6,713,446 ops/sec ±0.85% (90 runs sampled)
Fastest is Array#pop
```
#### - [from](./array/from.js)
``` shell
Array#from x 355,716 ops/sec ±3.01% (84 runs sampled)
Array#slice x 221,524 ops/sec ±2.48% (89 runs sampled)
Fastest is Array#from
```
#### - [forEach](./array/forEach.js)
``` shell
Array#forEach x 5,634,907 ops/sec ±2.20% (86 runs sampled)
For x 8,222,875 ops/sec ±1.99% (86 runs sampled)
Fastest is For
```
#### - [join](./array/join.js)
``` shell
Array#join x 3,090,573 ops/sec ±2.69% (83 runs sampled)
For x 3,721,981 ops/sec ±2.64% (82 runs sampled)
Fastest is For
```
#### - [reduce](./array/reduce.js)
``` shell
Array#reduce x 5,284,045 ops/sec ±1.33% (86 runs sampled)
For x 17,429,774 ops/sec ±1.56% (85 runs sampled)
Fastest is For
```

### Object

#### - [keys](./object/keys.js)
``` shell
object#keys x 8,104,139 ops/sec ±3.01% (85 runs sampled)
For x 5,988,572 ops/sec ±2.81% (87 runs sampled)
Fastest is object#keys
```
#### - [delete](./object/delete.js)
``` shell
object#delete x 2,614 ops/sec ±2.89% (79 runs sampled)
For x 1,018 ops/sec ±2.84% (83 runs sampled)
Fastest is object#delete
```
#### - [assign](./object/assign.js)
``` shell
object#assign x 1,695,861 ops/sec ±2.18% (89 runs sampled)
For x 6,889,346 ops/sec ±2.70% (88 runs sampled)
Fastest is For
```

### String

#### - [replace](./string/replace.js)
``` shell
String#replace x 1,848,753 ops/sec ±2.07% (85 runs sampled)
String#split_join x 1,026,638 ops/sec ±1.74% (88 runs sampled)
Fastest is String#replace
```
#### - [connect](./string/connect.js)
``` shell
String#`` x 110,113,889 ops/sec ±3.05% (82 runs sampled)
String#+ x 112,521,494 ops/sec ±2.97% (80 runs sampled)
Fastest is String#+,String#``
```
#### - [includes](./string/includes.js)
``` shell
String#includes x 14,405,285 ops/sec ±3.01% (88 runs sampled)
String#indexOf x 14,675,556 ops/sec ±3.19% (85 runs sampled)
Fastest is String#indexOf
```
#### - [repeat](./string/repeat.js)
``` shell
String#repeat x 17,875,978 ops/sec ±3.17% (88 runs sampled)
For x 9,558,928 ops/sec ±2.40% (82 runs sampled)
Fastest is String#repeat
```
#### - [trim](./string/trim.js)
``` shell
String#trim x 18,455,424 ops/sec ±4.23% (82 runs sampled)
String#replace x 4,909,374 ops/sec ±4.06% (83 runs sampled)
Fastest is String#trim
```

### Number
#### - [toNumber](./number/toNumber.js)
``` shell
-str x 122,400,007 ops/sec ±2.32% (102 runs sampled)
parseFloat x 10,768,183 ops/sec ±2.27% (103 runs sampled)
Fastest is -str
```
#### - [parseInt](./number/parseInt.js)
``` shell
parseInt x 47,146,783 ops/sec ±3.98% (82 runs sampled)
parseInt with param x 66,239,156 ops/sec ±1.90% (86 runs sampled)
-str x 112,560,910 ops/sec ±2.78% (85 runs sampled)
Fastest is -str
```
#### - [toString](./number/toString.js)
``` shell
add_empty_string x 117,613,352 ops/sec ±3.02% (96 runs sampled)
toString x 61,081,978 ops/sec ±1.73% (104 runs sampled)
Fastest is add_empty_string
```
