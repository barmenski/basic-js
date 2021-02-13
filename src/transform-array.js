const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr.length) return arr;
  const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  const res = [];

  arr.forEach((el, i, array) => {
    if (!commands.includes(el) && !res[i]) {
      return res.push(el); //если элемент не "командный" и этой позиции нет в "результ. массиве", то пушим в массив
    }
    res[i] = '***';
    switch (el) {
      case '--discard-next':
        if (array.length > i + 1) res[i + 1] = '***';
        break;
      case '--discard-prev':
      if (i !== 0) res[i - 1] = '***';
        break;
      case '--double-next':
        if (array.length > i + 1) res[i] = array[i + 1];
        break;
      case '--double-prev':
        if (i !== 0) res[i] = res[i - 1] ;
        break;
      default:
        break;
    }
  });

  return res.filter(el => el !== '***');
}