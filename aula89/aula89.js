/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo: Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada
para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do javascript vai tentar encontrar este membro no próprio
objeto e depois a cadeia de protótipos é usada até o topo (Null) até encontrar (ou não) tal membro.

*/

//Construtora -> molde (classe);
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome= sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__   o __proto__ faz referencia ao prototype da função que o criou.

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
};
//instancia
const pessoa1 = new Pessoa('kassio', 'costa');
const data = new Date();

console.dir(pessoa1);
console.dir(data);