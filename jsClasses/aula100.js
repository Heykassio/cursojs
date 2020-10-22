class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //métodos de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume-= 2;
    }
    //método estático = não precisa de instancia para funcionar, ele é ligado a classe toda
    static trocarPilha() {
        console.log('Pilhas trocadas!');
    }
}

const controle = new ControleRemoto('Samsung');

controle.aumentarVolume();
controle.aumentarVolume();
ControleRemoto.trocarPilha();

console.log(controle);

//metodos statics não tem acesso aos dados do objeto