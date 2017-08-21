/**
 * Created by xiaobxia on 2017/8/21.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('add_empty_string', function () {
  let str = ''+120;
}).add('toString', function () {
  let str = (120).toString();
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
