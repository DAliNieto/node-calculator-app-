const check = require ("./checkresult")

var num1=0;
var num2=0;


function suma (num1,num2) {
   
    if ((check(num1) && check(num2))===1){
        return Number(num1)+Number(num2); 
    }
       
} 
   
//console.log(suma(num1,num2));
module.exports =  suma;

 