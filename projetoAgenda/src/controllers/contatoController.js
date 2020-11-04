const Contato = require('../models/ContatoModel');

exports.create = (req, res) => {
    return res.render('contato', { contato: {} });
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/create'));
            return;
        }
        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
        return;
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
};

exports.show = async (req, res) => {
    if (!req.params.id) return res.render('404');
    const contato = await Contato.findOne(req.params.id);
    if (!contato) return res.render('404');

    return res.render('contato', { contato });
};

exports.edit = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect(`/contato/${req.params.id}`));
            return;
        }
        req.flash('success', 'Contato editado com sucesso.');
        req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
        return;
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
};

exports.delete = async (req, res) => {
    if (!req.params.id) return res.render('404');
    const contato = await Contato.delete(req.params.id);
    if (!contato) return res.render('404');

    req.flash('success', `O contato de ${contato.name} apagado com sucesso.`);
    req.session.save(()=> res.redirect('/'));
    return;
};
