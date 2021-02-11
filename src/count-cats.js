const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if(arr){
    let res=0;
    let cats=[];
    arr.forEach((subArr)=>{
      cats=subArr.filter(item=>item==='^^');
      res=res+cats.length;
    })
    return res;
  } else {
    return 0;
  }
};
