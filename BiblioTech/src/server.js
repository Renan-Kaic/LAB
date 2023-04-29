import dotenv from 'dotenv'

import mongoose from 'mongoose'

import app from './app.js'

dotenv.config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONNECT_STRING)
    .then(() => {
        console.log('Conectando ao banco de dados...')
        app.emit('connected')
        console.log('Conectado ao banco de dados!')
    })

const port = process.env.SERVER_PORT || 3000

app.on('connected', () => {
    app.listen(port, () => {
        console.log(`Servidor online - Porta ${port}`)
    })
})