const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.validate();

        if(this.errors.length > 0) return;

        await this.userExist();

        if(this.errors.length > 0) return;

        try{
            const salt = bcrypt.genSaltSync();
            this.body.password = bcrypt.hashSync(this.body.password, salt);
            this.user = await LoginModel.create(this.body);
        }catch(e){
            console.log(e);
        }
    }

    validate() {
        this.clearUp();

        if(!validator.isEmail(this.body.email)) this.errors.push('Email inválido.');

        if(this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres.'); 
    }

    clearUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }

    async userExist() {
        const user = await LoginModel.findOne({email: this.body.email});
        if(user) this.errors.push('Usuário já existe!');
    }
}

module.exports = Login;