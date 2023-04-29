import { Sequelize, Model } from 'sequelize';

import appConfig from '../config/appConfig';

export default class Foto extends Model {
    static init(sequelize) {
        super.init({

            originalname: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'O nome da imagem não pode estar vazio',
                    },
                },
            },

            filename: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {

                    notEmpty: {
                        msg: 'O nome da imagem não pode estar vazio',
                    },
                },
            },

            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.filename}`;
                },
            },
        }, {
            sequelize,
        })
        return this
    }

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
    }
}
