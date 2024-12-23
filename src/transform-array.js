const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (!arr.length) return arr;
  const commands = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  const res = [];

  arr.forEach((el, i, array) => {
    if (!commands.includes(el) && !res[i]) {
      return res.push(el); //если элемент не "командный" и этой позиции нет в "результ. массиве", то пушим в массив
    }
    res[i] = "***";
    switch (el) {
      case "--discard-next":
        if (array.length > i + 1) res[i + 1] = "***";
        break;
      case "--discard-prev":
        if (i !== 0) res[i - 1] = "***";
        break;
      case "--double-next":
        if (array.length > i + 1) res[i] = array[i + 1];
        break;
      case "--double-prev":
        if (i !== 0) res[i] = res[i - 1];
        break;
      default:
        break;
    }
  });

  return res.filter((el) => el !== "***");
}

module.exports = {
  transform,
};
