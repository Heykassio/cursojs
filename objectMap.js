const pessoas = [
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Luis'},
    {id: 1, nome: 'José'}
];

// const novasPessoas = {};

// for(const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};    
// }

const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

for(pessoa of novasPessoas) {
    const [identifier, {id, nome}] = pessoa;
    console.log(identifier, id, nome);
}