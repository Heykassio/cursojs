const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros.reduce((acumulador, valor)=> acumulador += valor, 0);

// console.log(resultado);

const pares = numeros.reduce((acumulador, valor)=>{
    if(valor%2 == 0) acumulador.push(valor);
    return acumulador;
}, []);


console.log(pares);

//no reduce tu sempre precisa retornar o acumulador

const dobro = numeros.reduce((acumulador, valor)=>{
    acumulador.push(valor*2);
    return acumulador;
}, []);

console.log(dobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Walace', idade: 47},
];


const maiorIdade = pessoas.reduce((acumulador, pessoa)=>{
    if(acumulador.idade > pessoa.idade) return acumulador;
    return pessoa;
});

console.log(maiorIdade);