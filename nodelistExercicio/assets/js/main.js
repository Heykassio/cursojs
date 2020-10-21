const divParagrafos = document.querySelector('.paragrafos');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

const paragrafos = divParagrafos.querySelectorAll('p');

for(p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'red';
}