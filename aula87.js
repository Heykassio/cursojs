// constructor function com Object.defineProperty

function Produto (nome, preco, estoque) {
   this.nome = nome;
   this.preco = preco;
   
   Object.defineProperty(this, 'estoque', {
       enumerable: true,
       configurable: true,
       get: function(){
           return estoque
       },
       set: function (valor){
        if(typeof valor !== 'number') {
            throw new TypeError('Tipo do valor inválido');
        }   
        estoque = valor;
       }
   });
}

// factory function 

function criaProduto (nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}


const p1 = new Produto('Computador', 2700, 30);

console.log(p1);
p1.estoque = 300
console.log(p1.estoque);

const p2 = criaProduto('camiseta');
console.log(p2);
console.log(p2.nome);
p2.nome = 'outra coisa'
console.log(p2.nome);