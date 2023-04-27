const check = require ("./checkresult")

var num1 =0;
var num2 =0;
var mensaje='';

const mult = (num1,num2) =>{
   
    if ((check(num1) && check(num2))===1){ 
        if (num1===0||num2 ===0){
            return mensaje=(`Su multiplicación es cero`);
        }else{
            return num1*num2;
        }
    }    
} 

  //console.log(mult(num1,num2));
  module.exports =  mult;