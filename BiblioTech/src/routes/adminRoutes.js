import { Router } from 'express'

import { createAdmin, login } from '../controllers/adminController.js'

const router = new Router()

router.post('/create-admin', createAdmin)
router.get('/login', login)

export default router
