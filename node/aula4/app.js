const path = require('path');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

const caminhoArquivo = path.resolve(__dirname, 'text.json');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'André'},
//     {nome: 'Ana'},
//     {nome: 'Gabriel'},
//     {nome: 'Débora'}
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);

async function readFile(caminho) {
    const dados = await ler(caminho);
    renderData(dados);
}

function renderData(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val=>console.log(val));
}

readFile(caminhoArquivo);
