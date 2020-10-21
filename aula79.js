const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const maiores = numeros.filter((e)=> e > 10);

console.log(maiores);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Walace', idade: 47},
];

const nomes = pessoas.filter(pessoa=> pessoa.nome.length >= 5);
const idade = pessoas.filter(pessoa=> pessoa.idade >=50);
const terminaA = pessoas.filter(pessoa=> pessoa.nome.substr(-1) == 'a');
const terminaA2 = pessoas.filter(pessoa=> pessoa.nome.toLowerCase().endsWith('a'));

// console.log(nomes, idade);
console.log(terminaA2);