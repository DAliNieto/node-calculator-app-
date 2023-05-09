
//const check = require ("./checkresult")
import {check} from './checkresult.js';

var num1=0;
var num2=0;
var total =0;
var mensaje='';
const divi = (num1,num2) =>{
        
    if ((check(num1) && check(num2))===1){
        if (num2 ===0){
            return mensaje=`La división solicitada no se puede realizar`;
          
        }else if (num1 ===0){
           return mensaje=`Su división es cero`;
          
        }else{
            return total=num1/num2;
           
        }

    }
}


   //console.log(divi(num1,num2));
  // module.exports =  divi;
  export {divi};