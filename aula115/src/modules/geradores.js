const rand = (min, max)=> Math.floor(Math.random()*(max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%&_=+<>-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function passwordGenerator(quant, maiusculas, minusculas, numeros, simbolos) {
    const passwordArray = [];
    quant = Number(quant);
    if(quant === 0) return 'Selecione uma quantidade.';
    for(let i = 0; i < quant; i++){
        maiusculas && passwordArray.push(geraMaiuscula());
        minusculas && passwordArray.push(geraMinuscula());
        numeros && passwordArray.push(geraNumero());
        simbolos && passwordArray.push(geraSimbolo());
    }

    return passwordArray.join('').slice(0, quant);
}


const senha = passwordGenerator(6, true, true, true, true);
console.log(senha);