import express from "express";
import 'dotenv/config';
import rotas from './rotas';

const app = express();

app.use(express.json())
app.use(rotas)

app.listen('3000', ()=>{
    console.log("Servidor inicializado")
})