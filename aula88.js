/*Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)*/

/*Já vimos
Object.keys(Retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 2.8}
// const outraCoisa = produto;
// outraCoisa.nome = 'Qualquer coisa'
// console.log(produto);
// console.log(outraCoisa);

const outraCoisa = {
    ...produto,
    material: 'porcelana'
};

outraCoisa.nome = 'Caneca';
console.log(produto);
console.log(outraCoisa);

const produto2 = Object.assign({}, produto, {material: 'porcelana'});// o assign tira os atributos e metodos dos objetos e joga no target(primeiro parametro passado).

console.log(produto2);

Object.defineProperty(produto2, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto2, 'material'));//descreve a property de um atributo do objeto

console.log(Object.values(produto2));// values retorna apenas os valores dos atributos de um objeto

console.log(Object.entries(produto2));// entries retorna um array com chave e valor para cada atributo do objeto


for([chave, valor] of Object.entries(produto2)){
    console.log(chave, valor);
}