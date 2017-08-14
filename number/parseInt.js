/**
 * Created by xiaobxia on 2017/8/7.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('parseInt', function () {
  let num = parseInt('120');
}).add('parseInt with param', function () {
  let num = parseInt('120', 10);
}).add('-str', function () {
  let num = -'120';
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
