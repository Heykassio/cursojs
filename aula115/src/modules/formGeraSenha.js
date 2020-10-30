import passwordGenerator from './geradores';

const passwordDisplay = document.querySelector('#senha-gerada');
const inputQuantidade = document.querySelector('#quantidade');
const chkMaiusculas = document.querySelector('#maiusculas');
const chkMinusculas = document.querySelector('#minusculas');
const chkNumeros = document.querySelector('#numeros');
const chkSimbolos = document.querySelector('#simbolos');
const btnGen = document.querySelector('#generator');


export default () => {
    btnGen.addEventListener('click', () =>{
        passwordDisplay.innerHTML = generator();
    });
};


function generator() {
    const password = passwordGenerator(
        inputQuantidade.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return password || 'Nada selecionado.';
}