/* eslint-disable camelcase */
import multer from 'multer'
import multerConfig from '../config/multerConfig'
import Foto from '../models/foto'

const upload = multer(multerConfig).single('file')

class UploadController {
    create(req, res) {
        return upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    errors: [err.code],
                })
            }

            try {
                const { originalname, filename } = req.file

                const { aluno_id } = req.body

                // const aluno = await Aluno.findByPk(aluno_id)

                // const aluno = await Aluno.findAll({
                //    attributes: ['id'],
                //    where: {
                //        id: aluno_id,
                //    },
                // }
                // if (!aluno || aluno.length === 0) {
                //    return res.status(404).json({
                //        errors: ['Não existe um aluno com o ID informado'],
                //    })
                // }

                const foto = await Foto.create({ originalname, filename, aluno_id })
                console.log(foto)
                return res.json(foto)
            } catch (e) {
                return res.status(400).json({
                    errors: ['Não existe aluno com o ID informado.'],
                })
            }
    })
}
}

export default new UploadController();
