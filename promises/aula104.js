function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject)=>{        
        if(typeof msg !== 'string') reject('Bad value');
        setTimeout(()=>{
            resolve(msg + ` Resolvido`);
        }, time);
    });
}

// const promises = [
//     // 'Um valor',
//     wait('Primeira promessa', rand(1, 5)),
//     wait('Segunda promessa', rand(1, 5)),
//     wait('Terceira promessa', rand(1, 5)),
//     // 'Outro valor'
// ];

// Promise.all(promises)
//     .then(valor=>{
//         console.log(valor);
//     })
//     .catch(e=>{
//         console.log(e);
//     });

// Promise.race(promises)
//     .then(valor=>{
//         console.log(valor);
//     })
//     .catch(e=>{
//         console.log(e);
//     });

function downloadPage() {
    const cache = true;

    if(cache) {
        return Promise.resolve('Página em cache');
    }else {
        return wait('Baixando página', 3000);
    }
}

function uploadPage() {
    const cache = true;

    if(cache) {
        return Promise.reject('Página em cache');
    }else {
        return wait('Subindo página', 3000);
    }
}

downloadPage()
    .then(response=>{
        console.log(response);
    })
    .catch(e=>{
        console.log(e);
    });

uploadPage()
    .then(response=>{
        console.log(response);
    })
    .catch(e=>{
        console.log(`Error: ${e}`);
    });