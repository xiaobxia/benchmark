/**
 * Created by xiaobxia on 2017/8/7.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('String#includes', function () {
    let s = "Hello world!";
    let h = s.includes("o");
}).add('String#indexOf', function () {
    let s = "Hello world!";
    let h = s.indexOf("o") !== -1;
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});