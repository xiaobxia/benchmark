/**
 * Created by xiaobxia on 2017/8/10.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('inside', function () {
  function func(num) {
    function add100(_num) {
      return _num + 100;
    }

    return add100(num);
  }

  func(1);
}).add('outside', function () {
  function add100(num) {
    return num + 100;
  }

  function func(num) {
    return add100(num)
  }

  func(1);
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
