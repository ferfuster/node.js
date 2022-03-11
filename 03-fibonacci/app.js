//Serie de Fibonacci

const serie = require ('./serie');


//señala la cantidad
/*let cantidad = 10;
 serie.crearSerie(cantidad)
 .then(mensaje => console.log(mensaje))
 .catch(mensaje=> console.log(mensaje))
*/



/*
//exporta el codigo de serie.js
const fs = require ('fs');


let fibo1 = 1;
let fibo2 = 1;
let serie = '';

serie += `${fibo1}\n`;
//console.log(`${fibo1}`);

for(let i= 2;i<=7 ; i++){
    //console.log(`${fibo2}`);
    serie+=`${fibo2}\t`;
    fibo2=fibo1+fibo2;
    fibo1=fibo2-fibo1;
}


fs.writeFile('fibonacci.txt', serie, (err)=>{
    if (err) throw err;
    console.log('El archivo fue creado con éxito.');
}
);*/


//toma la cantidad por consola
let argv = process.argv;
let valor = argv[2].split('=')[1];

console.log(valor);

let cantidad = valor;

serie.crearSerie(cantidad)
.then(mensaje => console.log(mensaje))
.catch(mensaje=> console.log(mensaje))
