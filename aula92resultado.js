function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequency()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    let cpfComDigito = this.criaDigito(cpfParcial);
    cpfComDigito = this.criaDigito(cpfComDigito);

    return cpfComDigito.toString() === Array.from(this.cpfLimpo).toString();
};

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    const arrayTratado = cpfArray.reduce((ac, value, index, array)=>{
        ac += Number(value)*(array.length + 1 -index);
        return ac 
    }, 0);

    let digito = 11-(arrayTratado%11);
    if(digito>9) digito = 0;

    cpfArray.push(String(digito));
    return cpfArray;
};

ValidaCpf.prototype.isSequency = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //ele vai repetir o primeiro digito 11x (que é o tamanho do array);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('');
if(cpf.valida()){
    console.log('CPF válido');
}else {
    console.log('CPF inválido');
}