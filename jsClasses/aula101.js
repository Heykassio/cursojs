class Cpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    validar() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length != 11 || typeof this.cpfLimpo !== 'string') return false;
        return 'cheguei aqui';
    }
}

const cpf = new Cpf('0000000000009');

console.log(cpf.validar());