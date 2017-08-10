/**
 * Created by xiaobxia on 2017/8/7.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('parseInt', function () {
  parseInt('120');
}).add('parseInt with param', function () {
  parseInt('120', 10);
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
