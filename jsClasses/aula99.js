class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return
        };
        this.ligado = true;
        console.log(`${this.nome} ligado!`);
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return
        };
        this.ligado = false;
        console.log(`Desligando o ${this.nome}...`);
    }
}

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //chamando o construtor da classe mãe
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, wifi) {
        super(nome);
        this.wifi = wifi;
    }

    ligar() {
        console.log(`${this.nome} o tablet está sendo ligado.`);
    }
}

const d1 = new DispositivoEletronico('Televisão');
const d2 = new SmartPhone('Iphone', 'Preto', '11');
const t = new Tablet('Ipad', true);
t.ligar();
d2.ligar();
d2.desligar();
d2.desligar();
console.log(d1);
console.log(d2);
