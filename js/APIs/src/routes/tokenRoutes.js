import { Router } from 'express';
import TokenController from '../controllers/TokenController'

const route = new Router()

route.post('/criar/', TokenController.create)

export default route
