/**
 * Created by xiaobxia on 2017/8/14.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('Array#join', function () {
  let ary = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let temp = ary.join('_');
}).add('For', function () {
  let ary = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let temp = '';
  for (let k = 0, len = ary.length; k < len; k++) {
    temp += k === 0 ? ary[k] : '_' + ary[k];
  }
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
