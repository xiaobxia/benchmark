/**
 * Created by xiaobxia on 2017/8/9.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Date#valueOf()', function () {
  (new Date()).valueOf();
}).add('Date#getTime', function () {
  (new Date()).getTime();
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
