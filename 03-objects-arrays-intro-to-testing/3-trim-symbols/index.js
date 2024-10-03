/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return '';
  }
  if (size === undefined) {
    return string;
  }

  let result = '';
  let previousChar = '';
  let charCount = 0;

  for (const currentChar of string) {
    if (currentChar === previousChar) {
      if (charCount < size) {
        result += currentChar;
        charCount++;
      }
    } else {
      result += currentChar;
      previousChar = currentChar;
      charCount = 1;
    }
  }

  return result;
}
