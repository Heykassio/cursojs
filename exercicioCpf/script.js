const button = document.querySelector('button');
const input = document.querySelector('#cpf');
const resultado = document.querySelector('.result');

function getCpf() {
    const cpf = input.value;
    if(!cpf) return;
    const cpfArray = String(cpf).split('');
    const firstDigits = cpfArray.filter((valor, index)=>{
        return index <= 8;
    });
    validate(firstDigits, 10);
    validate(firstDigits, 11);
    
    if(JSON.stringify(firstDigits) === JSON.stringify(cpfArray)){
        resultado.innerHTML = '<p> Válido</p>';
    }else {
        resultado.innerHTML = '<p> Inválido</p>';
    }
}


function validate (cpfArray, contador) {
    let index = 0;
    let acumulador = 0;
    for(let i = contador; i>= 2; i--){
        acumulador += Number(cpfArray[index])*i;
        index++;
    }
    let decimoDigito = 11 - (acumulador%11);
    if(decimoDigito > 9){
        decimoDigito = 0;
    };

    cpfArray.push(String(decimoDigito));
}


button.addEventListener('click', getCpf);