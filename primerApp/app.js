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


//funciones CallBack

function Mensaje (callback){
    console.log('Msj antes del callback');
    callback();
}
function Saludo (){
    console.log('Mjs despues del call');
}

Mensaje(Saludo);

/*la funcion Mensaje recibe como parametro a la funcion Saludo */

function Sumar (num1, num2, callback){
    let resultado=num1+num2;
    callback(resultado);
}
function Resultado(res){
    console.log(res);
}
Sumar(5, 8, Resultado);

/*setTimeout es una funcion callback propia de Js */

setTimeout(()=> console.log('se ejecuta luego de 3 segundos'),3000);