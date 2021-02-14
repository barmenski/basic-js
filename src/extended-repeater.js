const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.separator===undefined){
    options.separator="+";
}
if(options.additionSeparator===undefined){
    options.additionSeparator="|";
}
if(options.repeatTimes===undefined){
    options.repeatTimes=1;
}
if(options.additionRepeatTimes===undefined){
    options.additionRepeatTimes=1;
}

let strMain=String(str);

if(options.addition!==undefined){
var strAdd=String(options.addition);
}

let addition=[];
let main=[];

for(let i=1; i<=options.additionRepeatTimes; i++){
addition.push(strAdd);
}
let add=addition.join(options.additionSeparator);

for(let j=1;j<=options.repeatTimes; j++){
main.push(strMain.concat(add));
}
let result=main.join(options.separator);
return result;
};
  