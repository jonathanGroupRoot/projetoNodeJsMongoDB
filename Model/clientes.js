const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome: {type: String, required: true},
    cpf:  {type: String, required: true, unique: true},
    created: {type: Date, default: Date.now}
});
module.exports = mongoose.model('clientes',clienteSchema);