import Aluno from '../models/aluno';
import Foto from '../models/foto';

class AlunoController {
    async index(req, res) {
        const alunos = await Aluno.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'idade', 'email'],
            order: [['id', 'DESC']],
            include: {
                model: Foto,
                attributes: ['url', 'filename'],
            },
        })

        res.json(alunos)
    }

    async create(req, res) {
        try {
            const aluno = await Aluno.create(req.body)

            const { nome, sobrenome, idade, email } = aluno
            return res.json({ nome, sobrenome, idade, email })
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['ID não enviado'],
                })
            }

            const aluno = await Aluno.findByPk(id, {
                attributes: ['id', 'nome', 'sobrenome', 'idade', 'email'],
                order: [['id', 'DESC']],
                include: {
                    model: Foto,
                    attributes: ['url', 'filename'],
                },
            })

            if (!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe'],
                })
            }

           return res.json(aluno)
        } catch (e) {
            console.log(e)

            return res.status(400).json({
               errors: [e],
            })
        }
        }

        async delete(req, res) {
            try {
                const { id } = req.params

                if (!id) {
                    return res.status(400).json({
                        errors: ['ID Não enviado'],
                    })
                }

                const aluno = await Aluno.findByPk(id)

                if (!aluno) {
                    return res.status(400).json({
                        errors: ['Aluno não existe'],
                    })
                }

                await aluno.destroy()

                return res.status(200).json(['Aluno delatado com sucesso'])
            } catch (e) {
                return res.status(400).json({
                    errors: ['Algo inesperado aconteceu'],
                })
            }
        }

        async update(req, res) {
            try {
                const { id } = req.params

                if (!id) {
                    return res.status(400).json({
                        errors: ['ID Não Enviado'],
                    })
                }

                const aluno = await Aluno.findByPk(id)

                if (!aluno) {
                    return res.status(404).json({
                        errors: ['Aluno não encontrado'],
                    })
                }
                const novosDados = await aluno.update(req.body)

                const { nome, sobrenome, idade, email } = novosDados

                return res.json({ nome, sobrenome, idade, email })
            } catch (e) {
                return res.status(400).json({
                    errors: ['Algo inesperado aconteceu'],
                })
            }
        }
}

export default new AlunoController()
