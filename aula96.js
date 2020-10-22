const falar = {
    falar() {
        console.log(`${this.nome} está falando!`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo!`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo!`);
    }
}

const pessoaPrototype = Object.assign({}, comer, beber, falar);

// const pessoaPrototype = {...falar, ...comer, ...beber }; //desacoplando o código


function criaPessoa(nome, sobrenome) {
    
    //linkando o prototype e os atributos.
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Kassio', 'Costa');

p1.falar();