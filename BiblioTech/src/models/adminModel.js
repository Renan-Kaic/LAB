import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const adminSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    level: { type: Number,  default: 2 },
})

const adminModel = mongoose.model('admin', adminSchema)

class admin {
    constructor(params) {
        this.dados = {...params}
        this.dados.level = 2
        this.errors = []
    }

    async cadastrar() {
        try {

            this.valida()

            if (this.errors.length > 0) return

            if (await this.userExists()) {
                console.log(typeof this.errors)
                this.errors.push('Usuário já existe')
                return
            }

            const salt = bcrypt.genSaltSync(10)
            this.password = bcrypt.hashSync(this.dados.password, salt)

            const admin = await adminModel.create(this.dados)

            return
        } catch (e) {
            this.errors.push('Erro ao cadastrar usuário')
        }
    }

    async userExists() {
        const user = adminModel.findOne({ email: this.email })

        return user
    }

    valida() {

        if (!validator.isEmail(this.dados.email)) this.errors.push('E-mail inválido')
        if (!validator.isLength(this.dados.nome, { min: 3, max: 50 })) this.errors.push('Nome deve ter entre 3 e 50 caracteres')
        if (!validator.isLength(this.dados.password, { min: 3, max: 50 })) this.errors.push('Senha deve ter entre 3 e 50 caracteres')
        if (this.dados.level != 2) this.errors.push('Level inválido')
    }
}


export default admin
