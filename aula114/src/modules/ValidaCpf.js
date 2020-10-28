export default class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    newCpfGenerator(cpf) {
        let cpfSemDigito = cpf.slice(0, -2);
        const primeiroDigito = this.digitGenerator(cpfSemDigito);
        cpfSemDigito += primeiroDigito;
        const segundoDigito = this.digitGenerator(cpfSemDigito);
        return cpfSemDigito + segundoDigito;        
    }

    static digitGenerator(cpfSemDigito) {
        const somado = Array.from(cpfSemDigito).reduce((ac, value, index, array)=>{
            return ac+= (Number(value) * (array.length + 1 - index));
        }, 0);

        const digito = 11-(somado % 11);
        return digito > 9? '0' : String(digito);
    }

    isRepeat(){
        const cpfTeste = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
        return cpfTeste === this.cpfLimpo;
    }

    isValid() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length != 11 || typeof this.cpfLimpo !== 'string') return false;
        if(this.isRepeat()) return false;
        const cpfGerado = this.newCpfGenerator(this.cpfLimpo);
        return this.cpfLimpo === cpfGerado;
    }
}

console.log('cheguei aqui.');
