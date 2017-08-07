/**
 * Created by xiaobxia on 2017/8/7.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Array#from', function () {
    function done(ary) {
        let args = Array.from( arguments );
    }
    done(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}).add('Array#slice', function () {
    function done(ary) {
        let args = Array.prototype.slice.apply(arguments);
    }
    done(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});