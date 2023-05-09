//const check = require ("./checkresult")
import {check} from './checkresult.js';

var num1=0;
var total=0;

const resta = (num1,ant) =>{
   
    if (check(num1) === 1){
        total = Number (num1) - Number (ant);
        return Number(total); 
    }
} 
  // module.exports =resta;
  export {resta};