const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1 = s1;
  let str2 = s2;
  let ind = -1;
  let res = 0;
  for (let i = 0; i < s1.length; i += 1) {
    ind = str2.indexOf(str1.at(i));
    if (ind != -1) {
      res += 1;
      if (ind < str2.length) {
        str2 = str2.slice(0, ind) + str2.slice(ind + 1);
      } else str2 = str2.slice(0, ind);
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
