exports.homePage = (req, res) =>{    
    return res.render('index', {
        titulo: 'Título da <span style="color: red">página</span>',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
};

exports.post = (req, res) => {
    res.send(req.body);
    return;
}