const path = require ('path');

const objetoPath = path.parse(__filename);

console.log(objetoPath);
console.log("Se muestra solo en nombre:  "+ objetoPath.name);