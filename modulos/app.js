/*const path = require ('path');

const objetoPath = path.parse(__filename);

console.log(objetoPath);
console.log("Se muestra solo en nombre:  "+ objetoPath.name);*/



//-----------Modulo OS

/*
const os = require('os');

var memoriaLibre= os.freemem();
var memoriaTotal= os.totalmem();

console.log(`memoria Libre:  ${memoriaLibre}`);
console.log(`memoria Total: ${memoriaTotal}`);
*/

//----modulo File System

const fs = require ('fs');

//const archivos = fs.readdirSync('./');
//console.log(archivos);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Resultado', files);
});
