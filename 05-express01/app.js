const express= require('express');
const Joi=require('@hapi/joi');
const app = express();

app.use(express.json());

app.use(function(req, res, next){
    console.log('Logging.....');
    next();
})

app.use(function(req, res, next){
    console.log('Autenticando...');
    next();
})


const usuarios = [
    {id:1, nombre:"José"},
    {id:2, nombre:"fede"},
    {id:3, nombre:"andres"}
];

app.get('/', (req, res)=>{
    res.send('Express desde el inicio.');

});

app.get('/api/usuarios',(req, res)=>{
    res.send(usuarios);
   // res.send(["micho", "tito", "negro"]);
});

app.get('/api/usuarios/:id',(req, res)=>{
   // let usuario = usuarios.find(u =>u.id === parseInt(req.params.id));
   let usuario = existeUsuario(req.params.id);
    if(!usuario) res.status(404).send('El usuario no fue encontrado...');
    res.send(usuario);
});

app.post('/api/usuarios', (req, res)=>{
    const schema=Joi.object({
        nombre: Joi.string().min(3).required()
    });
    const {error, value}=validarUsuario(req.body.nombre);

    if(!error){
    const usuario={
        id: usuarios.length +1,
        nombre: req.body.nombre
    };
    usuarios.push(usuario);
    res.send(usuario);
}else{
    const mensaje=error.details[0].message;
    res.status(400).send(mensaje);
    }
});

app.put('/api/usuarios/:id',(req, res)=>{
    //encontrar si existe el objeto
    //let usuario=usuarios.find(u=>u.id===parseInt(req.params.id));
    let usuario = existeUsuario(req.params.id);
    if(!usuario) {
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

    const {error, value}= validarUsuario(req.body.nombre);
    if(error){
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
        return;
    }
usuario.nombre=value.nombre;
res.send(usuario);
});

app.delete('/api/usuarios/:id', (req, res) =>{
    let usuario = existeUsuario(req.params.id);
    if(!usuario) {
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

    const index =usuarios.indexOf(usuario);
    usuarios.splice(index,1);

    res.send(usuario);
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`puerto ${port} iniciado.....`);
});

function existeUsuario(id){
    return(usuarios.find(u=>u.id===parseInt(id)));
}


function validarUsuario(nom){
    const schema=Joi.object({
        nombre: Joi.string().min(3).required()
    });
    return(schema.validate({nombre: nom}))
}