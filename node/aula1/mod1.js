// const nome = 'Kassio';
// const sobrenome = 'Costa';

// const sayMyName = () => `${nome} ${sobrenome}`;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.sayMyName = sayMyName;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.sayMyName = sayMyName;


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

module.exports = {
    Pessoa
}