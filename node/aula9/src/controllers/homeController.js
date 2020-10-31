exports.homePage = (req, res) =>{
    return res.render('index');
};

exports.post = (req, res) => {
    console.log(req.body);
    return res.send('Formulário enviado!');
}