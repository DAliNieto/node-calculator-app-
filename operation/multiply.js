//const check = require ("./checkresult")
import {check} from './checkresult.js';

let num1 =4;
let num2 ='a';
let total=0;


const mult = (num1,num2) =>{
   
    if (check(num1) ===1 && check(num2) ===1){ 
       // a = num1*num2;
        //console.log(`Checknum1 ${check(num1) }`);
        //console.log(`Checknum2 ${check(num2) }`);
        total = Number (num1) * Number (num2);
        return Number(total); 
        

            
    }    

} 

  console.log(mult(num1,num2));
  //module.exports =  mult;
  export {mult};