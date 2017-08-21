/**
 * Created by xiaobxia on 2017/8/21.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('String#slice', function () {
  let str = 'abcdefg';
  str.slice(1,-2);
}).add('String#substr', function () {
  let str = 'abcdefg';
  str.substr(1, 4);
}).add('String#substring', function () {
  let str = 'abcdefg';
  str.substring(1, 5);
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
