const express = require ("express")
const dotenv = require ("dotenv")
const colors = require("colors")
const server = express();
dotenv.config();

const port = process.env.PORT;

server.get('/',(req,res)=>{
    res.send(`<h1>Hola mundo</h1>
    <p>¿como estamos?</p>`)
})
server.listen(port, ()=>{

    console.log (`Estoy en el puerto ${port}`.trap.random.bgWhite);
})