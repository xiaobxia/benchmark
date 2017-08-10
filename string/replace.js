/**
 * Created by xiaobxia on 2017/8/1.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('String#replace', function () {
  let str = '';
  for (let k = 0; k < 10; k++) {
    str += '_a';
  }
  str.replace(/_/g, '-');
}).add('String#split_join', function () {
  let str = '';
  for (let k = 0; k < 10; k++) {
    str += '_a';
  }
  str.split('_').join('-');
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
