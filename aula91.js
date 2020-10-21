function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco += valor;
};

Produto.prototype.desconto = function(valor){
    this.preco -= valor;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//O Object.create cria um objeto e o retorna. No caso, o prototype é um objeto no js
Camiseta.prototype = Object.create(Produto.prototype);
//Quando eu linko o prototype de camiseta com o produto, o construtor da camiseta é perdido, preciso linkar novamente o prototype.constructor com o da função construtora
Camiseta.prototype.constructor = Camiseta;

//Posso sobrescrever métodos da Classe produto em outra classe mais especializada
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco*percentual)/100;
};

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const generico = new Produto('gen', 100);

camiseta.aumento(100);
console.log(camiseta);
console.log(generico);


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.venda = function(quantidade) {
    if(this.estoque < quantidade) {
        return;
    }
    this.estoque -= quantidade;
}

const caneca = new Caneca('Caneca 300ml', 10, 'Porcelana', 50);

console.log(caneca);
caneca.venda(10);
console.log(caneca);

caneca.venda(50);
console.log(caneca.estoque);