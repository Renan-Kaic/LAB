require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes');
const path = require('path');
const middleGlobal = require('./src/middlewares/middle')

// conectando ao banco de dados

mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONNECTIONSTRING)
  .then( () => {
    app.emit('connected')
  })

// Habilitando o express para tratar os formularios
app.use(express.urlencoded({ extended: true }));

// Habilitando para trabalhar com arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(middleGlobal)
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('connected', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
})



