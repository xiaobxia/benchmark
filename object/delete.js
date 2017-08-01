/**
 * Created by xiaobxia on 2017/8/1.
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

suite.add('object#delete', function () {
    let obj = {};
    for (let k = 0; k < 1000; k++) {
        obj['key' + k] = k;
    }
    delete obj.key200;
    delete obj.key400;
    delete obj.key600;
    delete obj.key800;
}).add('For', function () {
    let obj = {};
    for (let k = 0; k < 1000; k++) {
        obj['key' + k] = k;
    }
    let target = {};
    let list = ['key200', 'key400', 'key600', 'key800'];
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && list.indexOf(key) === -1) {
            target[key] = obj[key];
        }
    }
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});