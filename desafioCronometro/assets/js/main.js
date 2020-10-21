const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const parar = document.querySelector('.parar');


const data = new Date('1989-03-19 00:00:00');

relogio.innerHTML = data.toLocaleTimeString('pt-br');

pausar.disabled = true;
parar.disabled = true;

let cronometro = new Date(data);
let intervalo = null;

function iniciarCronometro () {
    cronometro.setSeconds(cronometro.getSeconds()+1);
    relogio.innerHTML = cronometro.toLocaleTimeString('pt-br');
}

function pausarCronometro () {
    clearInterval(intervalo);
    relogio.classList.add('pausado');
    iniciar.disabled = false;
    pausar.disabled = true;
}

function pararCronometro() {
    removeClasse();
    cronometro = new Date(data);
    relogio.innerHTML = cronometro.toLocaleTimeString('pt-br');
    clearInterval(intervalo);
    iniciar.disabled = false;
    pausar.disabled = true;
    parar.disabled = true;
}

function removeClasse () {
    relogio.classList.remove('pausado');
}

iniciar.addEventListener('click', ()=>{
    removeClasse();
    clearInterval(intervalo);
    iniciar.disabled = true;
    pausar.disabled = false;
    parar.disabled = false;
    intervalo = setInterval(iniciarCronometro, 1000);
});

pausar.addEventListener('click', pausarCronometro);

parar.addEventListener('click', pararCronometro);
