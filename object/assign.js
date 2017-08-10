/**
 * Created by xiaobxia on 2017/8/7.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('object#assign', function () {
  let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
  };
  let temp = Object.assign({}, obj);
}).add('For', function () {
  let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
  };
  let temp = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = obj.key;
    }
  }
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
