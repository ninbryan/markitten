const assert = require('assert');
const markitten = require('./markitten');

const div = markitten.createFactory('div');
const span = markitten.createFactory('span');
const br = markitten.createFactory('br');

const result = div({yes: 'no'}, [
  div({maybe: 1, 'data-kebab': 'yum'}),
  div(false, true),
  div('#id.sweet.classname'),
  div,
  div(null, 'banana'),
  div(null, [
    markitten.createElement('span', '   ', 'text'),
    markitten.createElement('span', null, 'text'),
    markitten
  ]),
  div('nice', [span(null, 'cats'), br, br, span, br, span('', 'emptiness')])
]);

assert(result, 'did not compile');

console.log('>.< done');
