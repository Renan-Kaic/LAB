class HomeController {
    async index(req, res) {
        /* const novoAluno = await Aluno.create({
            nome: "Pedro",
            sobrenome: "João",
            idade: 17,
            peso: 92.5,
            altura: 1.90
        }) */
        res.json('ok')
    }
}

export default new HomeController()
