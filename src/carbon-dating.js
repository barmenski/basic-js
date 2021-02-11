const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if(str<15&&(typeof str==="string")&&str>0){
    let N=parseInt(str);
    let time=(Math.log(MODERN_ACTIVITY/N)*HALF_LIFE_PERIOD)/0.693;
    return Math.ceil(time);
  } else return false;
};
