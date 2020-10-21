const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map((valor)=> valor*2);

console.log(dobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Walace', idade: 47},
];

const nome = pessoas.map(pessoa=> String(pessoa.nome));

console.log(nome);

const pessoasSemNome = pessoas.map(pessoa=> ({idade: pessoa.idade}));

console.log(pessoasSemNome);

const pessoasId = pessoas.map((pessoa, index)=>({id: index, ...pessoa}))

console.log(pessoasId);