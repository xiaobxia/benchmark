/**
 * Created by xiaobxia on 2017/8/14.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('String#trim', function () {
  let str = ' a ';
  str.trim();
}).add('String#replace', function () {
  let str = 'a ';
  str.replace(/^\s+|\s+$/g, '');
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
