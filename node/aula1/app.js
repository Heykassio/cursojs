const axios = require('axios');
const { Pessoa } = require('./mod1');
// const falaNome = mod1.sayMyName;

const pessoa1 = new Pessoa('Kassio', 'Costa');
console.log(pessoa1);

(async function() {
    const dados = await axios('https://www.otaviomiranda.com.br/files/json/pessoas.json');
    console.log(dados.data);
})();