const express = require('express')
const route = express.Router()

const homeController = require('./controllers/homeController')


route.get('/', homeController.PaginaInicial)
route.post('/', homeController.TrataPost)

module.exports = route