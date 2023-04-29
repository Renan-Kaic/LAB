import { Usuario } from '../models/usuarioModel.js'

export const criarUsuario = async (req, res) => {
	const { nome, email, password, foto } = req.body

	try {
		const user = new Usuario({ nome, email, password, foto })
		await user.cadastrar()

		if (user.errors.length > 0) {
			return res.send(user.errors)
		}

		const { _id } = user

		return res.status(200).send({
			nome, email, foto, _id
		})
	}
	catch (error) {
		console.log(error)
	}
}
