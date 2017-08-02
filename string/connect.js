/**
 * Created by xiaobxia on 2017/8/2.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('String#``', function () {
    let a = 'a';
    let str = `b${a}b${a}b${a}b${a}`;
}).add('String#+', function () {
    let a = 'a';
    let str = 'b' + a + 'b' + a + 'b' + a + 'b' + a;
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});