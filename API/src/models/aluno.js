import Sequelize, { Model } from 'sequelize'

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({

            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O nome precisa ter 3 e 255 caracteres',
                    },
                },
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O sobrenome precisa ter 3 e 255 caracteres',
                    },
                },
            },

            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                isInt: {
                    msg: 'Idade inválida',
                },
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                isFloat: {
                    msg: 'Peso inválido',
                },
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                isFloat: {
                    msg: 'Peso inválido',
                },
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido',
                    },
                },
            },

        }, { sequelize })
        return this
    }

    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'aluno_id' })
    }
}
