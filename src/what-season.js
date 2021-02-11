const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if((date===undefined)||(isNaN(date))||(date.getFullYear()>3000)){
    return "Unable to determine the time of year!";
  } else if (date instanceof Date){
    let month=date.getMonth();
    if((month>=0)&&(month<=1)){
      return "winter";
    } else if((month>=2)&&(month<=4)){
      return "spring";
    } else if((month>=5)&&(month<=7)){
      return "summer";
    } else if((month>=8)&&(month<=10)){
      return "autumn";
    } else if(month===11){
      return "winter";
    } else return "Error";
  } else return "Unable to determine the time of year!";
};
