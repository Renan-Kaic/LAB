const express = require('express')

const app = express()

app.get ('/', (req, res) => {
    res.send(`
    <form action="" method="post">
    Nome: <input type="text" name="nome">
    <button type="submit">Enviar</button>
    </form>
    `)
})

app.post ('/', (req, res) => {
    res.send("Recebei o formulario")
})

app.get('/contato/instagram', (req, res) => {
    res.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
    console.log('tá funcionando 127.0.0.1/3000')
})