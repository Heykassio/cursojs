function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

// function waiting(msg, tempo) {
//     setTimeout(()=>{
//         console.log(msg);
//     }, tempo);
// }

// waiting('frase 1', rand(1, 3));
// waiting('frase 2', rand(1, 3));
// waiting('frase 3', rand(1, 3));


function waiting(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

waiting('Conectando com o BD', rand(1, 3))
    .then(response=>{
        console.log(response);
        return waiting(233445 , rand(1, 3));
    })
    .then(response=>{
        console.log(response);
        return waiting('Exibindo dados', rand(1, 3));
    })
    .then(response=>{
        console.log(response);
    })
    .catch(e=>{
        console.log(`ERROR: ${e}`);
    });

    console.log('Iniciando o programa');