const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const cadastroController = require('./src/controllers/cadastroController')

// MiddleWay
//function myMiddle(req, res, next) {
//    req.session = {nome: 'Renan', ID: '20211IC.CAX0016'}
//    console.log('\nPassei no middle\n')
//    next()
//}


// Rotas da home
route.get('/',homeController.paginaInicial);
route.post('/', homeController.trataPost);


// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

// rotas cadastro
route.get('/cadastro', cadastroController.paginaCadastro)
route.post('/cadastro', cadastroController.tratarCadastro)

module.exports = route;
