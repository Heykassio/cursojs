const Contato = require('../models/ContatoModel');

exports.index = async (req, res) =>{  
    const contatos = await Contato.findContatos();  
    return res.render('index', {contatos});
};