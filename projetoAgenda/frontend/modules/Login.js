import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e=>{
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const elemento = e.target;
        const emailInput = elemento.querySelector('input[name="email"]');
        const passwordInput = elemento.querySelector('input[name="password"]');

        let errors = false;
        
        const errorAlertBeforeEmail = elemento.querySelector('.email .error-input-text');
        if(errorAlertBeforeEmail) errorAlertBeforeEmail.remove();
        if(!validator.isEmail(emailInput.value)) {
            const errorAlert = document.createElement('p');
            errorAlert.classList.add('error-input-text');
            errorAlert.innerHTML = 'Email inválido!';
            elemento.querySelector('.email').appendChild(errorAlert);
            errors = true;
        }

        const errorAlertBeforePassword = elemento.querySelector('.password .error-input-text');
        if(errorAlertBeforePassword) errorAlertBeforePassword.remove();
        if(passwordInput.value.length < 3 || passwordInput.value.length > 20) {
            const errorAlert = document.createElement('p');
            errorAlert.classList.add('error-input-text');
            errorAlert.innerHTML = 'Senha precisa ter entre 3 e 20 caracteres!';
            elemento.querySelector('.password').appendChild(errorAlert);
            errors = true;
        }

        if(!errors) elemento.submit();

    }
}
