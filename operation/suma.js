//const check = require ("./checkresult")
//import * as check from './checkresult';

import {check} from './checkresult.js';

let num1='a';
let ant=2;
let total=0;



function suma (num1,ant) {
   
    if (check(num1) === 1){
       // console.log(`Checknum1 ${check(num1) }`);
       // console.log(`Checknum2 ${check(num2) }`);
        total = Number (ant) + Number (num1);
        return Number(total); 
    }
      
} 
   
console.log(suma(num1,ant));
//module.exports =  suma;

 export {suma } ;