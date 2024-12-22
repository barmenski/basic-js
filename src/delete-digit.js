const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = (""+n);
  let temp1 = str.slice(1);
  let temp2 = "";
  for(let i = 1; i<str.length; i += 1){
    if(str.length>=3){
      temp2 = str.slice(0, i) + str.slice(i+1);
    } else temp2 = str.slice(0,1);
    if(temp2>temp1) {
      temp1 = temp2;
    }
  }
  

  return Number(temp1);
}

module.exports = {
  deleteDigit
};
