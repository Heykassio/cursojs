//SuperClass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente! Saldo disponível: ${this.saldo}`);
        return
    };
    this.saldo -= valor;
    console.log(`Transação aceita! Saldo atual: ${this.saldo}`)

};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);// extende a classe conta
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);//linka os prototypes
ContaCorrente.prototype.constructor = ContaCorrente;//linka o constructor com a função especializada
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente! Saldo disponível: ${this.saldo} + ${this.limite}(limite)`);
        return;
    };

    this.saldo -= valor;
    console.log(`Transação aceita! Saldo atual: ${this.saldo}`);
};
// const conta1 = new Conta('0001', '32574-1', 50);

// console.log(conta1);

// conta1.depositar(50);
// // console.log(conta1);

// conta1.sacar(100);

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);// extende a classe conta
}

ContaPoupanca.prototype = Object.create(Conta.prototype);//linka os prototypes
ContaPoupanca.prototype.constructor = ContaPoupanca;//linka o constructor com a função especializada

const contaCorrente1 = new ContaCorrente('0001', '32512-1', 100, 200);
contaCorrente1.sacar(400);

const contaPoupanca1 = new ContaPoupanca('0001', '32512-1', 100);
contaPoupanca1.sacar(400);