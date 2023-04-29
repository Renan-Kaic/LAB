const cadastroModel = require('../models/cadastroModel')


exports.paginaCadastro = (req, res) => {
    res.render('cadastro')
}

exports.tratarCadastro = (req, res) => {
    const Nome = req.body.nome
    const Email = req.body.email
    const User = req.body.user
    console.log(Nome, Email, User)
    cadastroModel.create({
        nome: Nome, 
        email: Email,
        user: User
    })
        .then (dados => {
            res.send('sucesso')
        })
        .catch(erro =>{
            console.log(erro)
            res.send(req.body)
        })
}