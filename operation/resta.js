const check = require ("./checkresult")

var num1=0;
var num2=0;

const resta = (num1,num2) =>{
   
    if ((check(num1) && check(num2))===1){
        return num1-num2;
    }
} 
   module.exports =resta;