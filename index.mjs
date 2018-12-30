/**
 *
 * @param {string} tagName
 * @param {object|string} props
 * @param {string[]} kittens
 * @returns {string}
 */
export function createElement(tagName, props, kittens) {
  if (!kittens || !kittens.length) {
    return lonelyKitten(tagName, props);
  }

  return `<${tagName}${attributes(props)}>${litterOfKittens(kittens)}</${tagName}>`
}

export const toString = () => '<!-- markitten -->';

function lonelyKitten(tagName, props) {
  return `<${tagName}${attributes(props)}/>`
}

function litterOfKittens(kittens) {
  return Array.isArray(kittens) ? kittens.join('') : String(kittens);
}

function attributes(props) {
  if (typeof props === 'string') {
    props = extractIdClassName(props);
  }

  let result = '';

  if (props) {
    for (let key in props) {
      result += ` ${key}="${props[key]}"`;
    }
  }

  return result;
}

function extractIdClassName(idClassName) {
  let [id, ...classNames] = idClassName.split('.');

  if (id[0] === '#') {
    id = id.substring(1);
  } else {
    classNames = [id, ...classNames];
    id = null;
  }

  const props = {};
  if (id) { props.id = id; }
  if (classNames.length) { props.class = classNames.join(' '); }

  return props;
}

/**
 *
 * @param {string} tagName
 * @returns {function}
 */
export function createFactory(tagName) {
  tagName = String(tagName);

  const fn = createElement.bind(null, tagName)
  fn.toString = lonelyKitten.bind(null, tagName);

  return fn;
}