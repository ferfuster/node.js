/*function saludo(nombre){
    console.log("hola " + nombre);
}
saludo ("Grover");
*/

//funcion
const anios=[2000, 2005, 2008, 2012]

var edad =anios.map(function(el){
    return 2019-el;
})
console.log(edad);

//funciones flecha

let edad1 = anios.map(el=> 2019-el);
console.log(edad1);