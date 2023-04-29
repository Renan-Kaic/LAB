import { Router } from 'express'
import UserController from '../controllers/UserController'

import loginRequired from '../middlewares/loginRequired'

const route = new Router()

// route.get('/',loginRequired, UserController.index)
route.get('/perfil', loginRequired, UserController.show)

route.post('/criar/', loginRequired, UserController.create)
route.put('/editar/', loginRequired, UserController.update)
route.delete('/deletar/', loginRequired, UserController.delete)

export default route

/*

  index -> listar todos os registros -> GET
  show -> listar um registro -> GET
  store/create -> criar um registro -> POST
  update -> atualizar um registro -> PUT
  delete -> deletar um registro -> DELETE

*/
