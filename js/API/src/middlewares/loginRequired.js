import jwt from 'jsonwebtoken'
import User from '../models/usuario'

export default async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: 'Token requerido',
        })
    }

    console.log(typeof authorization)

    const [, token] = authorization.split(' ')
    try {
        console.log(token);
        const dados = jwt.verify(token, process.env.TOKEN_SECRET)

        const { id, email } = dados
        const user = await User.findOne({
            where: {
                id,
                email,
            },
        })
        console.log(user)
        if (!user) {
            return res.status(401).json({
                errors: 'usuário invalido ou expirado',
            })
        }

        req.userID = id
        req.userEmail = email

        return next()
    } catch (e) {
        console.log(e)
        return res.status(401).json({
            errors: 'Token invalido ou expirado',
        })
    }
}
