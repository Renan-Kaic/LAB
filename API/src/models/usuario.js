import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt'

export default class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O campo deve ter entre 3 e 255 caracteres.',
                    },
                },
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail ja cadastrado',
                },
                validate: {
                    isEmail: {
                        msg: 'O e-mail informado e invalido',
                    },
                },
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },

            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 50],
                        msg: 'A senha deve ter entre 8 e 50 caracteres',
                    },
                },
            },
        }, { sequelize })

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                // eslint-disable-next-line no-param-reassign
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        })
        return this
    }

    verificarPassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }
}
