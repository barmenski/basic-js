const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix) {
    let res = 0;
    let cats = [];
    matrix.forEach((subArr) => {
      cats = subArr.filter((item) => item === '^^');
      res = res + cats.length;
    });
    return res;
  } else {
    return 0;
  }
}

module.exports = {
  countCats
};
