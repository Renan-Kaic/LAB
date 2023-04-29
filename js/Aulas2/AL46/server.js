const express = require('express')
const routes = require('./router')
const path = require('path')

const app = express()


app.use(express.urlencoded({extended: true}))
app.set('view', path.resolve(__dirname, 'src', 'view'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'public')))

app.use(routes)


app.listen(3000, () => {
    console.info('Ta funcionando')
})

