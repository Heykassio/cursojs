function getDados () {
    const form = document.querySelector(".form");
    const nome = document.querySelector(".nome");
    const sobrenome = document.querySelector(".sobrenome");
    const altura = document.querySelector(".altura");
    const peso = document.querySelector(".peso");
    
    form.addEventListener('submit', (e)=>e.preventDefault());
    

    return {
        nome: nome.value,
        sobrenome: sobrenome.value,
        altura: altura.value,
        peso: peso.value,
        clear() {
            nome.value = "";
            sobrenome.value="";
            altura.value="";
            peso.value="";
        }
    };
}

function addDados () {
    const dados = [];
    const pessoa = getDados();
    dados.push(
        {
            nome: pessoa.nome,
            sobrenome: pessoa.sobrenome,
            altura: pessoa.altura,
            peso: pessoa.peso
        }
    );
    const output = document.querySelector(".output");
    console.log(dados);
    output.innerHTML += `<p> ${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
    pessoa.clear();
}