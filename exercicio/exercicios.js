//Escreva uma função que receba dois números e retorne o maior deles

// const maior = (x,y)=> x>y? x: y;

// console.log(maior(2,3));

// const ePaisagem = (largura, altura) => altura <= largura;

const fizzBuzz = numero => {
    if(typeof numero != 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'fizzBuzz';
    if(numero % 3 === 0) return 'fizz';
    if(numero % 5 === 0) return 'buzz';
    return numero;
}

console.log(fizzBuzz('15'));


for(let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i));
}