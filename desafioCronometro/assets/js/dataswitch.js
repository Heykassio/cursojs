// const data = new Date();
// data.get

// function getDate (data) {
//     const dia = data.getDate();
//     const semana = data.getDay();
//     const mes = data.getMonth();
//     const ano = data.getFullYear();
//     const hora = data.toTimeString();
    
//     return {semana, dia, mes, ano, hora};
// }

// function getWeekDay(day) {
//     switch (day){
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda-feira';
//         case 2:
//             return 'Terça-feira';
//         case 3:
//             return 'Quarta-feira';
//         case 4:
//             return 'Quinta-feira';
//         case 5:
//             return 'Sexta-feira';
//         case 6:
//             return 'Sábado';
//         default:
//             return 'Dia inválido';
//     }
// }

// function getMonth(mes) {
//     switch (mes){
//         case 0:
//             return 'Janeiro';
//         case 1:
//             return 'Fevereiro';
//         case 2:
//             return 'Março';
//         case 3:
//             return 'Abril';
//         case 4: 
//             return 'Maio';
//         case 5:
//             return 'Junho';
//         case 6:
//             return 'Julho';
//         case 7:
//             return 'Agosto';
//         case 8:
//             return 'Setembro';
//         case 9:
//             return 'Outubro';
//         case 10: 
//             return 'Novembro';
//         case 11:
//             return 'Dezembro';
//     }
//     /*
//         metodo certo de fazer isso:
//         function getMonth(month){
//             const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//             return mes[month];
//         }
//     */
// }

// function formatHour(hour) {
//     return hour.slice(0, 5);
// }

// const dataTotal = getDate(data);

// dataTotal.semana = getWeekDay(dataTotal.semana);
// dataTotal.mes = getMonth(dataTotal.mes);
// dataTotal.hora = formatHour(dataTotal.hora);

// window.addEventListener('load', ()=>{
//     const textoInput = document.querySelector('h1');
//     textoInput.innerHTML = `${dataTotal.semana}, ${dataTotal.dia} de ${dataTotal.mes} de ${dataTotal.ano} <br/> ${dataTotal.hora}`;
// });


// const h1 = document.querySelector('h1');

// const data = new Date();

// const opcoes = {
//     dateStyle: 'full',
// }

// console.log(data.toLocaleDateString('pt-BR', opcoes));

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const section = document.querySelector('section');
const elementosCriados = percorrerElementos(elementos);
section.appendChild(elementosCriados);

function percorrerElementos (elementos) {
    const div = document.createElement('div');
    for(let i = 0; i < elementos.length; i++) {
        const {tag, texto} = elementos[i];
        const elemento = criarElementos(tag, texto);
        div.appendChild(elemento);
    }
    return div;
}

function criarElementos (elemento, texto) {
    const elementoCriado = document.createElement(elemento);
    // elementoCriado.innerText = texto;
    //const textoCriado = document.createNodeText(texto);
    //elementoCriado.innerHTML = textoCriado;
    elementoCriado.innerHTML = texto;
    return elementoCriado;
}