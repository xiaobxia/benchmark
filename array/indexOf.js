/**
 * Created by xiaobxia on 2017/7/30.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Array#indexOf', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let temp = ary.indexOf(5);
}).add('For', function () {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let temp = null;
    for (let k = 0; k < 10; k++) {
        if (ary[k] = 5) {
            temp = k;
            break;
        }
    }
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});