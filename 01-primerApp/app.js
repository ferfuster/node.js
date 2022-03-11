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


//Promesas (Promises)
/*----Estado de las promesas--- */

/*
#fulltulled = La acción relacionada a la promesa se llevó a cabo con éxito
#rejected = La acción relacionada a la promesa falló
#pendid = Aún no se ha determinado si la promesa fue fulltilled o rejected
#setteld = Ya se ha determinado si la promesa fue fulltilled o rejected
*/

/**
 const HacerAlgo = new Promises((response, reject)=>{
     resolver(resultado);
     reject(error)
 });
 */

 const Mensaje1 = new Promise((resolve, reject)=>{
     setTimeout(()=>{
         if(false)
         resolve('ESto se ejecuta despues de 3 seg')
         else
            reject('hubo un error.')
     }, 3000);
 } );
 Mensaje1.then(msj =>{
     console.log(msj);
 })
 .catch(error=>{
     console.log(error);
 })

 //funiones Async/Await

 
 function Mensaje2(){
     return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(false)
        resolve('ESto se ejecuta despues de 3 seg')
        else
           reject('hubo un error.')
    }, 3000);
} );
 }
 async function llamadaAsync(){
     console.log('llamada...');
     const resultado = await Mensaje2();
     return resultado;
 }
 llamadaAsync().then(x => console.log(x)).catch(e=> console.log(e));
