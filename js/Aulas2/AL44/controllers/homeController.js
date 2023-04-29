exports.PaginaInicial = (req, res) => {
    res.send(`
        <form action="" method="post">
        Nome: <input type="text" name="nome">
        <button type="submit">Ola</button>
        </form>
    `)
}

exports.TrataPost = (req, res) => {
    res.send('Ola')
}