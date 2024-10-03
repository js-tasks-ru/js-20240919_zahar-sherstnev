/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const keys = path.split('.');

  return function (object) {
    return keys.reduce((acc, key) => {
      if (acc !== null && acc !== undefined && Object.prototype.hasOwnProperty.call(acc, key)) {
        return acc[key];
      } else {
        return undefined;
      }
    }, object);
  };
}


