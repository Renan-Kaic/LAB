import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'


const usuarioSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	foto: { type: String },
	reservas: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'reservas'
	}],
	emprestimos: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'emprestimos'
	}],
})

const usuarioModel = mongoose.model('usuarios', usuarioSchema)


export class Usuario {
	constructor(params) {
		this.dados = { ...params }
		this.errors = []
	}


	async cadastrar() {
		this.valida()

		if (this.errors.length > 0) return

		if (await this.userExists()) {
			this.errors.push('Usuário já existe')
			return
		}

		const salt = bcrypt.genSaltSync(10)
		this.password = bcrypt.hashSync(this.dados.password, salt)

		const usuario = await usuarioModel.create(this.dados)

		if (!usuario) {
			this.errors.push('Erro ao cadastrar usuário')
			return
		}

		return
	}

	async userExists() {
		const user = usuarioModel.findOne({ email: this.email })

		return user
	}

	valida() {

		if (!validator.isEmail(this.dados.email)) this.errors.push('E-mail inválido')
		if (!validator.isLength(this.dados.nome, { min: 3, max: 50 })) {
			this.errors.push('Nome deve ter entre 3 e 50 caracteres')
		}
		if (!validator.isLength(this.dados.password, { min: 3, max: 50 })) {
			this.errors.push('Senha deve ter entre 3 e 50 caracteres')
		}
	}
}
