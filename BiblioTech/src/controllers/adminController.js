import admin from '../models/adminModel.js'

export const createAdmin = async (req, res) => {
    console.log(req.body)
    try {
        const { nome, email, password, level } = req.body

        const Admin = new admin({ nome, email, password, level })
        await Admin.cadastrar()

        if (Admin.errors.length > 0) {
            return res.send(Admin.errors)
        }
        const { _id } = Admin

        return res.status(200).send({
            nome, email, level, _id
        })
    } catch (error) {
        res.send(error)

    }
}

export const login = async (req, res) => {
	
}
