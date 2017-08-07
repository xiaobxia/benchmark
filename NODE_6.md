## ES5函数

### Array

#### find
``` shell
Array#find x 5,610,617 ops/sec ±2.84% (82 runs sampled)
For x 22,286,619 ops/sec ±3.44% (82 runs sampled)
Fastest is For
```
#### push
``` shell
Array#push x 8,869,422 ops/sec ±1.35% (85 runs sampled)
For x 9,491,719 ops/sec ±1.54% (87 runs sampled)
Fastest is For
```
#### indexOf
``` shell
Array#indexOf x 17,748,665 ops/sec ±1.63% (84 runs sampled)
For x 28,792,256 ops/sec ±1.57% (81 runs sampled)
Fastest is For
```
#### pop_splice_slice
``` shell
Array#pop x 40,860,091 ops/sec ±1.42% (88 runs sampled)
Array#splice x 5,278,594 ops/sec ±1.33% (91 runs sampled)
Array#slice x 6,713,446 ops/sec ±0.85% (90 runs sampled)
Fastest is Array#pop
```

### Object

#### keys
``` shell
object#keys x 8,104,139 ops/sec ±3.01% (85 runs sampled)
For x 5,988,572 ops/sec ±2.81% (87 runs sampled)
Fastest is object#keys
```
#### delete
``` shell
object#delete x 2,614 ops/sec ±2.89% (79 runs sampled)
For x 1,018 ops/sec ±2.84% (83 runs sampled)
Fastest is object#delete
```

### String

#### replace
``` shell
String#replace x 1,848,753 ops/sec ±2.07% (85 runs sampled)
String#split_join x 1,026,638 ops/sec ±1.74% (88 runs sampled)
Fastest is String#replace
```
#### connect
``` shell
String#`` x 110,113,889 ops/sec ±3.05% (82 runs sampled)
String#+ x 112,521,494 ops/sec ±2.97% (80 runs sampled)
Fastest is String#+,String#``
```
#### includes
``` shell
String#includes x 14,405,285 ops/sec ±3.01% (88 runs sampled)
String#indexOf x 14,675,556 ops/sec ±3.19% (85 runs sampled)
Fastest is String#indexOf
```