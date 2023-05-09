
//const check = require ("./checkresult")
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {check} from './checkresult.js';
import {suma} from './suma.js';
import {resta} from './resta.js';
import {mult} from './multiply.js';
import {pairimpair} from './pairimpair.js';
import {divi} from './division.js'

let salir=true;
let ts;
let nomore=true;


const menu = [
    {
        opt: '1',
        nombre: 'Suma'
    },
    {
        opt: '2',
        nombre: 'Resta'
    },
    {
        opt: '3',
        nombre: 'Multiplicacion'
    },
    {
        opt: '4',
        nombre: 'Division'
    },
    {
        opt: '5',
        nombre: 'Par o impar'
    },
    {
        opt: '6',
        nombre: 'SALIR'
    }
];

console.clear();

function downloadmenu (){
    console.log(`===================`);
    console.log(`    CALCULADORA    ` );
    console.log(`===================`);
    console.log(`1. Sumar`);
    console.log(`2. Restar`);
    console.log(`3. Multiplicar`);
    console.log(`4. Dividir`);
    console.log(`5. Es par? Es impar?`);
    console.log(`6. Salir`);
}
     
   const  rl = readline.createInterface({ input, output });
            
do{
    downloadmenu();
    
    let answer = await rl.question('Qué desea hacer? ');
    //delete rl.input;
    //delete rl.output;
    switch (answer.toString()){
        case '1':
           
            ts  = await rl.question(`Cuantos números va operar: `);
           
            if (check(ts)===1 && ts < 2){
                console.log(`Debe digitar mas de un número para hacer alguna operación`);
                break;
            }
            if (check(ts)===1){

                    let i=1;
                    let num=0;
                    let ant=0;
                    let totalsuma=suma (0,0);
                    nomore=true;
                    while (i<=ts && nomore === true){
                        num = await rl.question(`Digite num ${ i }: `) ;
                        if (num.toString() != ''){  
                            totalsuma = suma (Number(num),Number(ant));
                            ant = totalsuma;
                            if (totalsuma==undefined){
                                console.log(`Uno de los datos ingresados no es numerico`);
                                nomore=false;
                            }else{
                                i++;
                            }           
                        }
                    }
                    
                    if (nomore){
                        console.log(`Total Suma: ${ totalsuma}`);
                    }
            } else{
                console.log(`Por favor digitar solo números`);
              }
        break;
        
        case '2':
           
                ts  = await rl.question(`Cuantos números va operar: `);
                
                if (check(ts)===1 && ts < 2){
                    console.log(`Debe digitar mas de un número para hacer alguna operación`);
                    break;
                }               
               
                if (check(ts)===1){

                    let i=1;
                    let num=0;
                    let ant=0;
                    let totalresta=resta (0,0);
                    nomore=true;
                    while (i<=ts && nomore === true){
                        num = await rl.question(`Digite num ${ i }: `) ;
                       
                        if (num.toString() != ''){
                                if (i===1){
                                    totalresta = resta (Number(num),Number(ant));
                                    console.log(`Si total: ${ totalresta}`);
                                    ant = totalresta;
                                }else {
                                    totalresta = resta (Number(ant),Number(num));
                                    ant = totalresta; 
                                }
                                                    
                                if (totalresta==undefined){
                                    console.log(`Uno de los datos ingresados no es numerico`);
                                    nomore=false;
                                }else{
                                    i++;
                                }           
                        }
                    }
                      
                    if (nomore){
                        console.log(`Total Resta: ${ totalresta}`);
                    }
                } else{
                console.log(`Por favor digitar solo números`);
                }
            
        break;
        
        case '3':

        ts  = await rl.question(`Cuantos números va operar: `);
        
        if (check(ts)===1 && ts < 2){
            console.log(`Debe digitar mas de un número para hacer alguna operación`);
            break;
        }
        if (check(ts)===1){

              let i=1;
              let num=0;
              let ant=1;
              let totalmult=mult(1,1);
              nomore=true;
                          
                while (i<=ts && nomore === true){
                  num = await rl.question(`Digite num ${ i }: `) ;
                    if (num.toString() != ''){

                            totalmult = mult (Number(num),Number(ant));
                            ant = totalmult;
                            
                            if (totalmult===undefined){
                                console.log(`Uno de los datos ingresados no es numerico`);
                                nomore=false;
                            }else{
                                i++;
                            }           
                    }
                }
              
              if (nomore){
                  console.log(`Total Multiplicación: ${ totalmult}`);
              }
        } else{
          console.log(`Por favor digitar solo números`);
        }
        break;
        case '4':


        ts  = await rl.question(`Cuantos números va operar: `);
        
        if (check(ts)===1 && ts < 2){
            console.log(`Debe digitar mas de un número para hacer alguna operación`);
            break;
        }
        if (check(ts)===1){

              let i=1;
              let num=0;
              let num2=0;
              let ant=1;
              let totaldivi=0;
              let nomore=true;
                          
                while (i<=ts && nomore === true){
                  num = await rl.question(`Digite num ${ i }: `) ;

            console.log(`Num antes if: ${num}`);                    
                            if (num.toString() != '' && i>1){

                                    totaldivi = divi (Number(num),Number(num2));
                                    ant = totaldivi;
                                    
                                    if (totaldivi===undefined){
                                        console.log(`Uno de los datos ingresados no es numerico`);
                                        nomore=false;
                                    }else{
                                        i++;
                                    }           
                            }else if (num.toString()===''){
                                console.log(`Por favor digitar número `);
                            }
                }
              
              if (nomore){
                  console.log(`Total División: ${ totaldivi}`);
              }
        } else{
          console.log(`Por favor digitar solo números`);
        }
        break;
       
        case '5':
            
            ts = await rl.question(`Cuantos números desea verificar: `) ;
            let nomore=true;
            let i=1;
            let numverfi;
            let verifi='';

            while (i<=ts && nomore===true){
                numverfi = await rl.question(`Digite el num ${ i} a verificar: `) ;
                if (numverfi.toString() != ''){
                    
                    verifi= pairimpair(Number(numverfi));
                    //console.log(`Verifi: ${ verifi}`);
                    if (verifi === undefined){
                        //console.log(`Uno de los datos ingresados no es numerico`);
                        nomore=false;
                    }else{
                        console.log(`El numero digitado es: ${verifi}`)
                        i++;
                    }
                }
            }
            if(nomore === false){
                console.log(`Por favor digitar solo números`);
            }
                
        break;
        case '6':
            salir =false;
            rl.close();
        break;
        
        default:
            console.log('Por favor, seleccionar una opción valida');
                
    }
}while ( salir);

  










//rl.close();