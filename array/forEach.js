/**
 * Created by xiaobxia on 2017/8/8.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Array#forEach', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ary.forEach(function (value) {
        let a = value;
    })
}).add('For', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function done(value) {
        let a = value;
    }

    for (let k = 0, len = ary.length; k < len; k++) {
        done(ary[k]);
    }
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});