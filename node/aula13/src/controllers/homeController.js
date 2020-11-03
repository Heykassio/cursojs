exports.homePage = (req, res) =>{
    
    return res.render('index');
};

exports.post = (req, res) => {
    return res.send(req.body);
}