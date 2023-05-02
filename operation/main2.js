const readline = require('readline');
const suma = require ("./suma");


console.clear();
let exitmenu=true;

console.log(`===================`);
console.log(`    CALCULADORA    ` );
console.log(`===================`);
console.log(`1. Sumar`);
console.log(`2. Restar`);
console.log(`3. Multiplicar`);
console.log(`4. Divisar`);
console.log(`5. Es par? Es impar?`);
console.log(`6. Salir`);

const menu = [
    {
        opt: 1,
        nombre: 'Suma'
    },
    {
        opt: 2,
        nombre: 'Resta'
    },
    {
        opt: 3,
        nombre: 'Multiplicacio'
    },
    {
        opt: 4,
        nombre: 'Division'
    },
    {
        opt: 5,
        nombre: 'Par o impar'
    },
    {
        opt: 6,
        nombre: 'SALIR'
    }
];



const optioncheck = (option) =>{
 
    return new Promise ((resolve, reject) => {

        let interfazCaptura = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });
        
         interfazCaptura.question('\nEscoja la opción: ', (respuesta) =>{
        
           let option = menu.find(r => respuesta.toString()==='opt');

           if (option){
            resolve (option);
           }else{
            reject (`Por favor digite una opción valida`);
           }           
         
              
        });
 
  
    });


}

optioncheck(option);


do{
 console.log(` exitmenu: ${exitmenu}`)

let option='';

let interfazCaptura = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

 interfazCaptura.question('\nEscoja la opción: ', (respuesta) =>{

   option = respuesta.toString();

        switch (option){
            case '1':
                console.log(`op 1`);
                suma(num1,num2);
                break;
            case '2':
                console.log(`op 2`);
                break;
            case '6':
                salir =false;
                break;
            default:
                console.log('Por favor, seleccionar una opción valida');
                    
        }
    
        
         // interfazCaptura.close();    
});

}while (exitmenu);

interfazCaptura.close(); 
