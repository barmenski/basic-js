const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity < 15 && typeof sampleActivity === "string" && sampleActivity > 0) {
    let N = parseFloat(sampleActivity);
    let time = (Math.log(MODERN_ACTIVITY / N) * HALF_LIFE_PERIOD) / 0.693;
    return Math.ceil(time);
  } else return false;
}

module.exports = {
  dateSample,
};
