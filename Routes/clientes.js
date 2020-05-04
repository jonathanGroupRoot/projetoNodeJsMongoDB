const express = require('express');
const router = express.Router();
const Clientes = require('../Model/clientes');

router.get('/listarClientes',(req,resp) =>{
    Clientes.find({}, (error,clientes) => {
        if(error)
        {
            return resp.send({Erro: 'Erro ao consultar o usuário'});
        }
        return resp.send({clientes});
    });
});
router.post('/cadastrarClientes',(req,resp) => {
  const {nome,cpf} = req.body;
    if(!nome || !cpf)
    {
        return resp.send({erro: 'Dados Insuficientes'});
    }
    Clientes.findOne({nome,cpf},(error,cliente) => {
        if(error) 
        {
            return resp.send({error: 'Erro ao buscar Usuário'});
        }
        if(cliente) 
        {
            return resp.send({erro: 'Usuário já cadastrado!'});
        }
    });
    Clientes.create(req.body,(error,cliente) => {
        if(error)
        {
            return resp.send({erro:'Erro ao cadastrar o cliente!'});
        }
        return resp.send({cliente});
    });
});
module.exports = router;