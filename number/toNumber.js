/**
 * Created by xiaobxia on 2017/8/10.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('-str', function () {
  let num = +'120.20';
}).add('parseFloat', function () {
  let num = parseFloat('120.20');
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
