const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor > 100 || valor < 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if(this[_velocidade] == 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');

console.log(c1);
c1.acelerar();
console.log(c1);
c1.frear();
console.log(c1);
c1.frear();

c1.velocidade = -50;
console.log(c1.velocidade);
