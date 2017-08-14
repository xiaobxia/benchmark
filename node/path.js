/**
 * Created by xiaobxia on 2017/8/11.
 */
const path = require('path');
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('path#join', function () {
  let p = path.join('/foo', 'bar', 'baz/asdf', 'quux');
}).add('+', function () {
  let p = '/foo' + '/bar' + '/baz/asdf' + '/quux';
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
