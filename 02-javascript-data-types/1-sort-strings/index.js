/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param) {
  const newArr = arr.slice();

  newArr.sort((a, b) => {

    const localeCompareOptions = {
      sensitivity: 'variant',
      caseFirst: 'upper'
    };

    return a.localeCompare(b, 'ru', localeCompareOptions) ||
      a.localeCompare(b, 'en', localeCompareOptions);
  });

  return param === 'desc' ? newArr.reverse() : newArr;
}

