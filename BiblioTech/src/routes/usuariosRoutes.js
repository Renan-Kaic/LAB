import { Router } from 'express'
import { criarUsuario } from '../controllers/usuariosController.js'

const router = new Router()

router.post('/criar', criarUsuario)

export default router
