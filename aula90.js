const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveB);


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
}

const produto1 = new Produto('Blusa', 100);

produto1.desconto(50);
produto1.aumento(100);

console.log(produto1);

const produto2 = {
    nome: 'Caneca',
    preco: 15,
    // __proto__: Produto.prototype
};

Object.setPrototypeOf(produto2, Produto.prototype);

produto2.desconto(20);

console.log(produto2);

const produto3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Placa mãe'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
});


produto3.aumento(10);

console.log(produto3);