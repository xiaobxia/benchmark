/**
 * Created by xiaobxia on 2017/8/1.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Array#pop', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ary.pop()
}).add('Array#splice', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ary.splice(ary.length - 1,1);
}).add('Array#slice', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ary.slice(0, -1);
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});