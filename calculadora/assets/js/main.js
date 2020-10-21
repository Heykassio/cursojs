function Calculadora() {
    this.display = document.querySelector('.display');

    this.iniciar = () => {
        this.cliqueBotoes();
        this.apertaEnter();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.btnParadisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.limpar();
            if (el.classList.contains('btn-del')) this.limparUm();
            if (el.classList.contains('btn-eq')) this.calcular();

        });
    };

    this.btnParadisplay = (valor) => this.display.value += valor;

    this.limpar = () => this.display.value = '';

    this.limparUm = () => this.display.value = this.display.value.slice(0, -1);

    this.calcular = () => {
        let valor = this.display.value;
        try {
            valor = eval(valor);
            if (!valor) {
                alert('Calculo inválido!');
                return
            }
            this.display.value = String(valor);
        } catch (error) {
            alert('Calculo inválido!');
            return
        };

    };

    this.Enter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizarConta();
            }
        });
    };
};

const calculadora = new Calculadora();

calculadora.iniciar();

// function criaCalculadora () {
//     return {
//         display: document.querySelector('.display'),


//         iniciar() {
//             this.cliqueBotoes();
//             this.apertaEnter();
//         },

//         cliqueBotoes() {
//             document.addEventListener('click', (e)=>{
//                 const el = e.target;
//                 if(el.classList.contains('btn-num')){
//                     this.btnParaDisplay(el.innerText);
//                 };

//                 if(el.classList.contains('btn-clear')) {
//                     this.limparDisplay();
//                 };

//                 if(el.classList.contains('btn-del')) {
//                     this.limparUm();
//                 };
//                 if(el.classList.contains('btn-eq')) {
//                     this.realizarConta();
//                 }
//             });
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         },

//         limparDisplay() {
//             this.display.value = '';
//         },

//         limparUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizarConta() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if(!conta) {
//                     alert('Conta inválida');
//                     return;
//                 }

//                 this.display.value = String(conta);
//                 return;

//             }catch(e) {
//                 alert('Conta inválida');
//                 return;
//             }
//         },

//         apertaEnter() {
//             this.display.addEventListener('keyup', e=>{
//                 if(e.keyCode === 13){
//                     this.realizarConta();
//                 }
//             });
//         }

//     }
// }

// const calculadora = criaCalculadora();
// calculadora.iniciar();
