/**
 * Created by xiaobxia on 2017/8/24.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Array#reduce', function () {
  let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let temp = ary.reduce(function (total, currentValue) {
    return total + currentValue;
  }, 0);
}).add('For', function () {
  let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let temp = 0;
  for (let k = 0; k < 10; k++) {
    temp += ary[k];
  }
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
