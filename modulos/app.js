/*const path = require ('path');

const objetoPath = path.parse(__filename);

console.log(objetoPath);
console.log("Se muestra solo en nombre:  "+ objetoPath.name);*/


const os = require('os');

var memoriaLibre= os.freemem();
var memoriaTotal= os.totalmem();

console.log(`memoria Libre:  ${memoriaLibre}`);
console.log(`memoria Total: ${memoriaTotal}`);