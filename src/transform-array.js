const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  /*if(arr.length===0){
    return [];
  } else if(Array.isArray(arr)){

    let result=[];
    if((arr[0]==='--discard-next')||(arr[0]==='--discard-prev')||(arr[0]==='--double-next')||(arr[0]==='--double-prev')){
      var i=1;
      result.push(arr[i]);
    } else {
      var i=0;
      result.push(arr[i]);
    }
    i++;

  for(i; i<arr.length; i++){
    switch(arr[i]){
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if((Object.is(result[result.length-1], arr[i-1]))&&(arr[i-2]!='--discard-next')){
          result.pop();
          break;
        } else break;
      case '--double-next':
        if((i+1)<(arr.length-1)){
          result.push(arr[i+1]);
          break;
        } else break;
      case '--double-prev':
        if((Object.is(result[result.length-1], arr[i-1]))&&(arr[i-2]!='--discard-next')){
          result.push(arr[i-1]);
          break;
        } else break;
      default:
        result.push(arr[i]);
        break;
    }
  }
   
  return result;

} else return "Error"; 
//---------------------------------------------------1 тест не проходит
let result=[];
if(arr.length===0){
  return result;
  } else if(Array.isArray(arr)){
    
    if((arr[0]==='--discard-next')||(arr[0]==='--discard-prev')||(arr[0]==='--double-next')||(arr[0]==='--double-prev')){
      var i=1;
      result.push(arr[i]);
    } else {
      var i=0;
      result.push(arr[i]);
    }
    i++;

    for(i; i<arr.length; i++){
      if(arr[i]==='--discard-next'){
        i++;
      } else if((arr[i]==='--discard-prev')&&(arr[i-2]!='--discard-next')){
        result.pop();
      } else if((arr[i]==='--discard-prev')&&(arr[i-2]==='--discard-next')){
        //nothing
      } else if((arr[i]==='--double-prev')&&(arr[i-2]!='--discard-next')){
        result.push(arr[i-1]);
      } else if((arr[i]==='--double-prev')&&(arr[i-2]==='--discard-next')){
        //nothing          
      } else if((arr[i]==='--double-next')&&((i+1)<=(arr.length-1))){
        result.push(arr[i+1]);
      } else if((arr[i]==='--double-next')&&((i+1)>(arr.length-1))){
       //nothing
      } else result.push(arr[i]);
    }
    return result;
} else return "Error";

};
//----------------------------------1 тест не проходит
*/
let result=arr.slice();
  if(result.length===0){
    return [];
    } else if(Array.isArray(result)){
      let i=0;

      if((result[0]==='--discard-next')||(result[0]==='--discard-prev')||(result[0]==='--double-next')||(result[0]==='--double-prev')){
        i++;
      };

      for(i; i<result.length-1; i++){
        switch (result[i]){
          case '--discard-next':
            if((i+1)<=(result.length-1)){
              result.splice(i+1, 1, "hidden");
            }
          break;
          case '--discard-prev':
            if(result[i-1]!="hidden"){
              result.splice(i-1, 1, "hidden");
            }
          break;
          case '--double-next':
            if((i+1)<=(result.length-1)){
              result.splice(i, 1, result[i+1]);
            }
          break;
          case '--double-prev':
            if(result[i-1]!="hidden"){
              result.splice(i, 1, result[i-1]);
          }
          break;
          default:
          break;
        }//выполнили команды, но массив с "мусором"   
        
      }
      
      for(i=0; i<result.length-1; i++){
        if((result[i]==='--discard-next')||(result[i]==='--discard-prev')||(result[i]==='--double-next')||(result[i]==='--double-prev')||(result[i]==="hidden")){
          result.splice(i, 1);
          i--;
        };
      }//почистили от "мусора"
    



      return result;
  } else return "Error";
}
//-----------------------------------------------------------2 теста не проходит