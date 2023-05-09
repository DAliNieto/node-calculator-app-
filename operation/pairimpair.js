//const check = require ("./checkresult")
import {check} from './checkresult.js';

var num=0;

const pairimpair = (num) =>{
    if (check(num)===1){ 

        if (num%2 ===0){
            return `Es par`; 
        }else{
            return `Es impar`;
        }
    }
}

//console.log(`entro2 ${check(num)}`);
//console.log(pairimpair(num1)); 
//module.exports =pairimpair;
export {pairimpair};

 
