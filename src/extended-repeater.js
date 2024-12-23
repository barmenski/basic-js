const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  let strMain = String(str);

  if (options.addition !== undefined) {
    var strAdd = String(options.addition);
  }

  let addition = [];
  let main = [];

  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    addition.push(strAdd);
  }
  let add = addition.join(options.additionSeparator);

  for (let j = 1; j <= options.repeatTimes; j++) {
    main.push(strMain.concat(add));
  }
  let result = main.join(options.separator);
  return result;
}

module.exports = {
  repeater
};
