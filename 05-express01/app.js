const express= require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send('Express desde el inicio.');

});

app.get('/api/usuarios',(req, res)=>{
    res.send(['grover','luis','ana']);
})

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`puerto ${port} iniciado.....`);
})