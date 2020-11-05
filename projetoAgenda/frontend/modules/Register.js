import validator from 'validator';

export default class Register {
    constructor(form) {
        this.form = document.querySelector(form);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e=>{
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const element = e.target;
        const nameInput = element.querySelector('input[name="name"]');
        const emailInput = element.querySelector('input[name="email"]');
        const phoneInput = element.querySelector('input[name="phone"]');

        let errors = false;

        const errorAlertBeforeName = element.querySelector('.name .error-input-text');
        if(errorAlertBeforeName) errorAlertBeforeName.remove();
        if(!nameInput.value.length > 0) {
            const errorAlert = document.createElement('p');
            errorAlert.classList.add('error-input-text');
            errorAlert.innerHTML = 'O nome não pode estar em branco!';
            element.querySelector('.name').appendChild(errorAlert);
            errors = true;
        }

        const errorAlertBeforeEmail = element.querySelector('.email .error-input-text');
        if(errorAlertBeforeEmail) errorAlertBeforeEmail.remove();
        if(emailInput.value && !validator.isEmail(emailInput.value)){
            const errorAlert = document.createElement('p');
            errorAlert.classList.add('error-input-text');
            errorAlert.innerHTML = 'Email inválido!';
            element.querySelector('.email').appendChild(errorAlert);
            errors = true;
        }

        const errorAlertBeforeContact = element.querySelector('.phone .error-input-text');
        if(errorAlertBeforeContact) errorAlertBeforeContact.remove();
        if(!emailInput.value && !phoneInput.value) {
            const errorAlert = document.createElement('p');
            errorAlert.classList.add('error-input-text');
            errorAlert.innerHTML = 'Pelo menos um contato precisa ser enviado: Email ou Telefone.'
            element.querySelector('.phone').appendChild(errorAlert);
            errors = true;
        }

        if(!errors) element.submit();
    }
}
