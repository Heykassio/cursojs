const request = obj => {

    //com callback
    // const xhr = new XMLHttpRequest();
    // xhr.open(obj.method, obj.url, true);
    // xhr.send();

    // xhr.addEventListener('load', ()=>{
    //     if(xhr.status >= 200 && xhr.status < 300){
    //         obj.success(xhr.responseText);
    //     }else {
    //         obj.error(xhr.statusText);
    //     }
    // });

    //com async await
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    const href = el.getAttribute('href');
    // request({
    //     method: 'GET',
    //     url: href
    //     // success(response) {
    //     //     loadResults(response);
    //     // },
    //     // error(errorText){
    //     //     console.log(errorText);
    //     // }
    // }).then(response=>{
    //     loadResults(response);
    // }).catch(e=>{
    //     console.log(e);
    // });

    try {
        const response = await request({ method: 'GET', url: href });
        loadResults(response);
    } catch (error) {
        console.log(error);
    }
}

function loadResults(response) {
    const div = document.querySelector('.resultado');
    div.innerHTML = response;
}

