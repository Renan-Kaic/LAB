import User from '../models/usuario'

class UserController {
    async create(req, res) {
        try {
            const novoUser = await User.create(req.body)
            const { id, nome, email } = novoUser
            res.json({ id, nome, email })
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message),
            })
        }
    }

    async index(req, res) {
        try {
            console.log(req.params)
            const users = await User.findAll()

            return res.json(users)
        } catch (e) {
            console.log(e)
            return res.json(null)
        }
    }

    async show(req, res) {
        try {
            console.log(req.userID)
            const user = await User.findByPk(req.userID)
            const use = {
                nome: user.nome,
email: user.email,
                criado: user.created_at,
editado: user.updated_at }
            return res.status(200).json(use)
        } catch (e) {
            console.log(e)
            return res.status(400).json(null)
        }
}

    async update(req, res) {
        try {
            if (!req.userID) {
                return res.status(400).json({
                    errors: ['ID não enviado'],
                })
            }

            const user = await User.findByPk(req.userID)

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                })
            }
            req.body = {
                nome: req.body.nome || user.nome,
                email: req.body.email || user.email,
                senha: req.body.senha || user.senha,
            }

            const novosDados = await user.update(req.body)

            return res.json(novosDados)
        } catch (e) {
            console.log(e)
            return res.json(null)
        }
    }

    async delete(req, res) {
        try {
            const user = await User.findByPk(req.userID)

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não encontrado'],
                })
            }

            user.destroy()

            return res.send('Usuário deletado com sucesso')
        } catch (e) {
            console.log(e)
            return res.json(null)
        }
    }
}

export default new UserController()
