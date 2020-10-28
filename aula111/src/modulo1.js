const nome = 'Kassio';
const sobrenome = "Costa";
const idade = 29;

function soma(x, y) {
    return x+y;
}

// export default(y, x) => x*y;

// export { nome, sobrenome, idade };

export {nome , sobrenome, idade, soma};

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
