const HomeModel = require('../models/HomeModel')


//HomeModel.create({
//  titulo: 'Revolução dos bichos',
//  descricao: 'revolução'
//}) 
//  .then(dados => console.log(dados))
//  .catch(error => console.log(error))

exports.paginaInicial = (req, res) => {
  req.session.usuario = {logado: true}
  res.render('index', {
    titulo: 'Esse será o titulo da pagina'
    
  });
};

exports.trataPost = (req, res) => {
  res.send(req.body);

  return
};
