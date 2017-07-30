/**
 * Created by xiaobxia on 2017/7/30.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Array#push', function () {
    let ary = [];
    for (let k = 0; k < 10; k++) {
        ary.push(k);
    }
}).add('For', function () {
    let ary = [];
    for (let k = 0; k < 10; k++) {
        ary[ary.length] = k;
    }
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});