exports.homePage = (req, res) =>{
    console.log(req.flash('info'), req.flash('success'), req.flash('error'), req.flash('teste'));
    console.log(req.session.usuario);
    return res.render('index');
};

exports.post = (req, res) => {
    return res.send(req.body);
}