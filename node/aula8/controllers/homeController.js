exports.homePage = (req, res) =>{
    return res.send(
        `<form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"/>
            <button type="submit">Enviar</button>
        </form>`
    );
};

exports.post = (req, res) => {
    console.log(req.body);
    return res.send('Formulário enviado!');
}