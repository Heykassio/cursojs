const input = document.querySelector('input');
const button = document.querySelector('.adicionar');
const ul = document.querySelector('ul');

function getToDo () {
    const tarefa = input.value;
    input.value = '';
    localStorage.setItem(tarefa, tarefa);
    return tarefa;
}

function createButton () {
    const button = document.createElement('button');
    button.innerHTML = 'Remover tarefa';
    button.classList.add('remover');
    button.addEventListener('click', (e)=>{
        const key = e.target.parentNode.textContent.replace('Remover tarefa', '');
        localStorage.removeItem(key);
        e.target.parentNode.remove();
    });
    return button;
}

function addToDo (tarefa) {    
    const li = document.createElement('li');
    const button = createButton();
    li.innerHTML = tarefa;
    li.appendChild(button);
    return li;
}

function addLi () {
    const tarefa = getToDo();
    const li = addToDo(tarefa);
    ul.appendChild(li);
}

button.addEventListener('click', addLi);

function listToDos () {
    if(localStorage.length > 0){
        Object.keys(localStorage).forEach((key)=>{
            const li = addToDo(localStorage.getItem(key));
            ul.appendChild(li);
        });
    }
}

listToDos();
