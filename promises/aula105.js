function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Bad value');
                return;
            };
            resolve(msg + ` Resolvido`);
            return;
        }, time);
    });
}

// wait('Fase 1', rand(0, 3))
//     .then(response=>{
//         console.log(response);
//         return wait('Fase 2', rand(0,3));
//     })
//     .then(response=>{
//         console.log(response);
//         return wait('Fase 3', rand(0,3));
//     })
//     .then(response=>{
//         console.log(response);
//         return;
//     })    
//     .catch(e=>{
//         console.log(e);
//     });

async function execute() {
    try {
        const fase1 = await wait('fase 1', rand(0, 3));
        console.log(fase1);

        const fase2 = await wait('fase 2', rand(0, 3));
        console.log(fase2);

        const fase3 = await wait(1000, rand(0, 3));
        console.log(fase3);

        console.log('terminanos na fase:', fase3);
    }catch(e) {
        console.log(e);
    }
}

execute();