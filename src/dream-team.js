const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr=[];
  let res="";
    if(Array.isArray(members)){
      for (let item of members){
        if(typeof item==="string"){
          for(let i=0; i<item.length; i++){
            if(item[i]!=" "){
            arr.push(item[i].toUpperCase());
            break;
            };
          }
        }
      
      }
      arr.sort();
      res=arr.join("");
      return res;
    } else return false;
};
