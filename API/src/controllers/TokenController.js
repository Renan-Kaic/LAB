import jwt from 'jsonwebtoken'
import User from '../models/usuario'

class TokenController {
    async create(req, res) {
        const { email = '', password = '' } = req.body

        if (!email || !password) {
            return res.status(401).json({
                errors: ['Credenciais invalidas'],
            })
        }

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(400).json({
                errors: ['Usuário não existe'],
            })
        }

        if (!(await user.verificarPassword(password))) {
            return res.status(401).json({
                errors: ['Usuário ou senha inválidos'],
            })
        }
        const { id } = user
        const token = jwt.sign(
            { id, email },
            process.env.TOKEN_SECRET,

            { expiresIn: process.env.TOKEN_EXP },
        )

        return res.json({
            token,
            user: {
                ID: user.id,
                nome: user.nome,
                email: user.email,
            },
        })
    }
}

export default new TokenController()
