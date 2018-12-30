# markitten

[![NPM](https://nodei.co/npm/markitten.png)](https://nodei.co/npm/markitten/)

[UMD](https://unpkg.com/markitten)
 
```js
let result = markitten.createElement(
  'div',
  '#special.sweet.classname',
  markitten.createElement('span', null, 'text')
);
result ===
  "<div id=\"special\" class=\"sweet classname\"><span>text</span></div>";

const div = markitten.createFactory('div');
const span = markitten.createFactory('span');
const br = markitten.createFactory('br');

result = div('nice', [span(null, 'cats'), br, br, span, br, span('', 'emptiness')]);
result ===
  "<div class=\"nice\"><span>cats</span><br/><br/><span/><br/><span class=\"\">emptiness</span></div>"

```
