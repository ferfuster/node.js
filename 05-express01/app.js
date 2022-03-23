const express= require('express');
const app = express();

const usuarios =[
    {id:1, nombre:"José"},
    {id:2, nombre:"fede"},
    {id:3, nombre:"andres"}
];

app.get('/', (req, res)=>{
    res.send('Express desde el inicio.');

});

app.get('/api/usuarios',(req, res)=>{
    res.send(['grover','luis','ana']);
})

app.get('/api/usuarios/:id',(req, res)=>{
    let usuario = usuarios.find(u =>u.id === parseInt(req.params.id));
    if(!usuario)res.status(404).send('El usuario no fue encontrado...');
    res.send(usuario);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`puerto ${port} iniciado.....`);
})