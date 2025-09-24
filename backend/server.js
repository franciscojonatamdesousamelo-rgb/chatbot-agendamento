// server.js - Backend inicial para chatbot de agendamento
import express from "express";
import bodyParser from "body-parser";
import { Pool } from "pg";
const app = express();
app.use(bodyParser.json());
app.get("/", (req,res)=> res.json({status:"ok", service:"Chatbot Agendamento"}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));