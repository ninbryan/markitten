(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.markitten = {}));
}(this, function (exports) { 'use strict';

  /**
   *
   * @param {string} tagName
   * @param {object|string} props
   * @param {string[]} kittens
   * @returns {string}
   */
  function createElement(tagName, props, kittens) {
    if (!kittens || !kittens.length) {
      return lonelyKitten(tagName, props);
    }

    return ("<" + tagName + (attributes(props)) + ">" + (litterOfKittens(kittens)) + "</" + tagName + ">")
  }

  var toString = function () { return '<!-- markitten -->'; };

  function lonelyKitten(tagName, props) {
    return ("<" + tagName + (attributes(props)) + "/>")
  }

  function litterOfKittens(kittens) {
    return Array.isArray(kittens) ? kittens.join('') : String(kittens);
  }

  function attributes(props) {
    if (typeof props === 'string') {
      props = extractIdClassName(props);
    }

    var result = '';

    if (props) {
      for (var key in props) {
        result += " " + key + "=\"" + (props[key]) + "\"";
      }
    }

    return result;
  }

  function extractIdClassName(idClassName) {
    var ref = idClassName.split('.');
    var id = ref[0];
    var classNames = ref.slice(1);

    if (id[0] === '#') {
      id = id.substring(1);
    } else {
      classNames = [id ].concat( classNames);
      id = null;
    }

    var props = {};
    if (id) { props.id = id; }
    if (classNames.length) { props.class = classNames.join(' '); }

    return props;
  }

  /**
   *
   * @param {string} tagName
   * @returns {function}
   */
  function createFactory(tagName) {
    tagName = String(tagName);

    var fn = createElement.bind(null, tagName);
    fn.toString = lonelyKitten.bind(null, tagName);

    return fn;
  }

  exports.createElement = createElement;
  exports.toString = toString;
  exports.createFactory = createFactory;

}));
