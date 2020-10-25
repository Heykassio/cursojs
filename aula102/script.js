class Valida {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e=>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValidFields();
        const validPassword = this.isValidPassword();

        if(validFields && validPassword) {
            alert('Formulário enviado!');
            this.formulario.submit();
        }
    }

    //aqui é o validador de senha
    isValidPassword() {
        let valid = true;

        const password = this.formulario.querySelector('.senha');
        const repeatPassword = this.formulario.querySelector('.repetir-senha');
        if(password.value !== repeatPassword.value){
            valid = false;
            this.createError(password, `Campos senha e repetir senha precisam ser iguais.`);
            this.createError(repeatPassword, `Campos senha e repetir senha precisam ser iguais.`);
        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, `Senha precisa ter entre 6 e 12 caracteres.`);
        }

        return valid;
    }

    isValidFields() {
        let valid = true;

        //aqui ele tá limpando os erros
        for(let errorField of this.formulario.querySelectorAll('.error-text')){
            errorField.remove();
        }

        //aqui ele tá fazendo a verificação em cada input
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.textContent;

            //aqui ele confere se o input tá vazio
            if(!campo.value){
                this.createError(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            //aqui ele valida o cpf
            if(campo.classList.contains('cpf')){
                if(!this.isCpfValid(campo)) valid = false;
            }

            //aqui ele valida o user
            if(campo.classList.contains('usuario')){
                if(!this.isValidUser(campo)) valid = false;
            }
        }

        return valid;
    }

    //aqui é o validador do cpf
    isCpfValid(campo) {
        const cpf = new Cpf(campo.value);
        if(!cpf.isValid()) {
            this.createError(campo, `CPF inválido.`);
            return false;
        }
        return true
    }

    //aqui é o validador de user
    isValidUser(campo) {
        const user = campo.value;
        let valid = true;
        if(user.length < 3 || user.length > 12){
            this.createError(campo, `Usuário precisa ter entre 3 e 12 caracteres.`);
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo, `Usuário precisa conter apenas letras e números`);
            valid = false;
        }

        return valid;
    }

    //aqui ele cria a div de erro com a mensagem
    createError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const formulario = new Valida();