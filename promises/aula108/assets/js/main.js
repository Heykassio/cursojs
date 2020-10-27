// fetch('pessoas.json')
//     .then(response=>response.json())
//     .then(json=> loadElementsOnPage(json));

axios('pessoas.json')
    .then(response=>loadElementsOnPage(response.data));

function loadElementsOnPage(json) {
    const div = document.querySelector('.resultado');
    const ul = document.createElement('ul');
    json.forEach(value=>{
        const li = document.createElement('li');
        li.innerHTML = value.nome;
        ul.appendChild(li);
    });
    div.appendChild(ul);
}