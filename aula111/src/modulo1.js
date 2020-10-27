const nome = 'Kassio';
const sobrenome = "Costa";
const idade = 29;

function soma(x, y) {
    return x+y;
}

// export { nome, sobrenome, idade };

export {nome as default, sobrenome, idade, soma};
