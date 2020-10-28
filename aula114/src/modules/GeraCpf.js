import ValidaCpf from './ValidaCpf';

export default class GeraCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random()*(max - min) + min));
    }
    cpfFormatado(cpf) {
        return (cpf.slice(0,3)+'.'+ cpf.slice(3,6)+'.'+cpf.slice(6, 9)+'-'+cpf.slice(9,11))
    }
    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCpf.digitGenerator(cpfSemDigito);
        const digito2 = ValidaCpf.digitGenerator(cpfSemDigito + digito1);
        return this.cpfFormatado(`${cpfSemDigito}${digito1}${digito2}`);
    }
}