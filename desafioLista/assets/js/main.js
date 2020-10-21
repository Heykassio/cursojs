const input = document.querySelector('input');
const button = document.querySelector('.adicionar');
const ul = document.querySelector('ul');

function getToDo () {
    const tarefa = input.value;
    input.value = '';
    if(!tarefa) return;
    if(verify(tarefa)) {
        alert('Tarefa já existente!');
        return;
    }
    // localStorage.setItem(tarefa, tarefa);
    return tarefa;
}

function verify (key) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if(tarefas.indexOf(key) >=0) return true
    return false;
}

function createButton () {
    const button = document.createElement('button');
    button.innerHTML = 'Remover tarefa';
    button.classList.add('remover');
    button.addEventListener('click', (e)=>{
        // const key = e.target.parentElement.textContent.replace('Remover tarefa', '');
        // let tarefas = JSON.parse(localStorage.getItem('tarefas'));
        // tarefas.splice(tarefas.indexOf(key), 1);
        // const tarefasString = JSON.stringify(tarefas);
        // localStorage.setItem('tarefas', tarefasString);
        e.target.parentNode.remove();
        saveToDo();
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
    if(!tarefa) return;
    const li = addToDo(tarefa);
    ul.appendChild(li);
    input.focus();
    
    saveToDo();
}

button.addEventListener('click', addLi);

function saveToDo () {
    const liToDo = ul.querySelectorAll('li');
    const tarefas = [];

    for(tarefa of liToDo) {
        let toDoText = tarefa.innerText;
        toDoText = toDoText.replace('Remover tarefa', '');
        tarefas.push(toDoText);
    }
    const tarefasJson = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function listToDos () {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    for(tarefa of tarefas) {
        const li = addToDo(tarefa);
        ul.appendChild(li);
    }
}

// function listToDos () {
//     if(localStorage.length > 0){
//         Object.keys(localStorage).forEach((key)=>{
//             const li = addToDo(localStorage.getItem(key));
//             ul.appendChild(li);
//         });
//     }
// }

listToDos();
