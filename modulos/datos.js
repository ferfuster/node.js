//global.test='Hola mundo';


/*--------modulo----*/

var url = 'https://www.udemy.com';

function dato(mensaje){
    //envia un HTTP request
    console.log(mensaje);
}

//funcion dentro de mismo modulo. Ya que no esta exportada
function leerDatos(){

}
//exporta la funcion "dato" como "log"
module.exports.log = dato;
//exporta la url de la variable
module.exports.url = url;

console.log(module);