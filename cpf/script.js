function Cpf(cpfString) {
    this.cpf = cpfString;
}
Cpf.prototype.addDigit = function(cpfArray) {
    const cpftratado = cpfArray.map((value, index, array)=>{
        return Number(value) * (array.length + 1 -(index));
    });
    let digito = cpftratado.reduce((ac, value)=> ac+value);
    digito = 11-(digito%11);

    if(digito>9) digito = 0;

    cpfArray.push(String(digito));
}

Cpf.prototype.limpar = function (cpf){
    const cpfLimpo = cpf.replace(/\D+/g, '');
    const cpfFullArray =  Array.from(cpfLimpo);;
    const cpfFirstArray = cpfFullArray.filter((value, index)=> index <= 8);
    return {cpfFullArray, cpfFirstArray};
}

Cpf.prototype.validate = function () {
    const {cpfFullArray, cpfFirstArray} = this.limpar(this.cpf);

    this.addDigit(cpfFirstArray);
    this.addDigit(cpfFirstArray);
    return cpfFullArray.toString() === cpfFirstArray.toString();
}

const cpf = new Cpf('000.000.000-00');

console.log(cpf);