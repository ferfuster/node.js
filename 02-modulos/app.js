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
/*
const fs = require ('fs');

//const archivos = fs.readdirSync('./');
//console.log(archivos);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Resultado', files);
});
*/

//--- Modulo Events
/*
const EventEmitter =require('events');
const emitter = new EventEmitter();

//registrar el listener

emitter.on('mensajeLoger',(arg)=>{
    console.log('Listener llamado...', arg);

})
//registrar el evento
emitter.emit('mensajeLoger',{id:1, url:'http://prueba.com'});
*/

//---Modulo HTTP

const http = require('http');
const server = http.createServer((req, res)=>{
    if (req.url==='/'){
        res.write('Hola mundo');
        res.end();
    }
    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['mouse','teclado','parlante']));
        res.end();
    }



});

/*server.on('connection',(puerto)=>{
    console.log('nueva conexion...');
})*/

server.listen(3000);
console.log(`servidor en puerto 3000...`);