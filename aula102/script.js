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
    }

    isValidFields() {
        let valid = true;
        for(let errorField of this.formulario.querySelectorAll('.error-text')){
            errorField.remove();
        }
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.textContent;
            if(!campo.value){
                this.createError(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.isCpfValid(campo)) valid = false;
            }
        }
    }

    isCpfValid(campo) {
        const cpf = new Cpf(campo.value);
        if(!cpf.isValid()) {
            this.createError(campo, `CPF inválido.`);
        }
        return true
    }

    createError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const formulario = new Valida();