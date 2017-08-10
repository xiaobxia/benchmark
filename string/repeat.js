/**
 * Created by xiaobxia on 2017/8/7.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('String#repeat', function () {
  "hello".repeat(10);
}).add('For', function () {
  let str = '';
  for (let k = 0; k < 10; k++) {
    str += "hello";
  }
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
