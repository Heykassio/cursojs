const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"/>
            <button type="submit">Enviar</button>
        </form>`
    );
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebido: ${req.body.nome}`);
});

app.get('/testes/:idUser?/:parametros?', (req, res)=>{  //params são parametros passados na url
    console.log(req.params);
    console.log(req.query);
    return res.send(req.params);
});

app.listen(3000, ()=>{
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor rodando!');
});
