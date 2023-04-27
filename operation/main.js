const  suma1  = require ("./suma") ;
const  resta1  = require ("./resta") ;
const  multiply1  = require ("./multiply") ;
const  division1  = require ("./division") ;
const  par  = require ("./pairimpair") ;
//const check = require ("./checkresult")
//import { suma }  from '/suma.js';


num1='5';
num2=6;
//console.log(`Main: ${check(num1,num2)}`);
    
    if (suma1(num1,num2)==undefined||resta1(num1,num2)==undefined||multiply1(num1,num2)==undefined||division1(num1,num2)==undefined||par(num1)==undefined){
        console.log(`Uno de los datos ingresados no es numerico`);
    }else{
        console.log(`Suma: ${suma1(num1,num2)}`);
        console.log(`Resta: ${resta1(num1,num2)}`);
        console.log(`Multiplicación: ${multiply1(num1,num2)}`);
        console.log(`División: ${division1(num1,num2)}`);
        console.log(`El número 1 es: ${par(num1)}`);
        console.log(`El número 2 es: ${par(num2)}`);
    }
    

