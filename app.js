const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Conexão com banco de dados 
mongoose.connect( 'mongodb+srv://john_adm:78951root@clusterapiteste-qkg5b.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('disconnected', () => {
    console.log('O banco de dados se desconectou');
});
mongoose.connection.on('error', ()  =>{
    console.log('Erro no banco de dados');
});
mongoose.connection.on('connected', () => {
    console.log('Banco de dados conectado com sucesso!!');
});

//Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Porta
app.listen(3000, () => {
    console.log('Servidor Funcionando');
});
module.exports = app;