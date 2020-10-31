const express = require('express');
const routes = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//Rotas da home
routes.get('/', homeController.homePage);
routes.post('/', homeController.post);

//Rotas do contato
routes.get('/contato', contatoController.homePage);
module.exports = routes;