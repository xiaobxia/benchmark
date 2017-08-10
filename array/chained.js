/**
 * Created by xiaobxia on 2017/8/8.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('without chained', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let temp = ary.sort();
    temp.join('');
}).add('chained', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ary.sort().join('');
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});