const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false,
        default: ''
    },
    email: {
        type: String,
        required: false,
        default: ''
    },
    phone: {
        type: String,
        required: false,
        default: ''
    },
    created_at: {
        type: Date,
        default: Date.now()
    } 
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register() {
        this.validate();
        if(this.errors.length > 0) return;

        this.contato = await ContatoModel.create(this.body);
    }

    validate() {
        this.clearUp();
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email precisa ser válido.');
        if(!this.body.name) this.errors.push('Nome é um campo obrigatório.');
        if(!this.body.email && !this.body.phone){
            this.errors.push('Pelo menos um contato precisa ser enviado: Email ou Telefone');
        }
    }

    clearUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            lastname: this.body.lastname,
            email: this.body.email,
            phone: this.body.phone
        };
    }

    async edit(id) {
        if(typeof id !== 'string') return;
        this.validate();
        if(this.errors.length > 0) return;
        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
    }

    static async findOne(id) {
        if(typeof id !== 'string') return;
        const user = await ContatoModel.findById(id);
        return user;
    }

    static async findContatos() {
        const contatos = await ContatoModel.find().sort({ created_at: -1});
        return contatos;
    }

    static async delete(id) {
        if(typeof id !== 'string') return;
        const contato = await ContatoModel.findByIdAndDelete({_id:id});
        return contato;
    }
}

module.exports = Contato;