var data='';
var option='';

console.clear();
console.log(`===================`);
console.log(`    CALCULADORA    ` );
console.log(`===================`);
console.log(`1. Sumar`);
console.log(`2. Restar`);
console.log(`3. Multiplicar`);
console.log(`4. Divisar`);
console.log(`5. Es par? Es impar?`);

console.log("\nEscoja la opción:");


    process.stdin.on('data', function (data){
        option = data.toString();
        console.log(`option dentro:${ option}`);
        process.exit();
    });


process.stdout.write(`option fuera: ${option}`);

//console.log(`option:${ data.toString()}`);
