import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const route = new Router()

route.get('/index/', loginRequired, alunoController.index)
route.post('/cadastrar/', loginRequired, alunoController.create)
route.get('/perfil/:id', loginRequired, alunoController.show)
route.put('/update/:id', loginRequired, alunoController.update)
route.delete('/delete/:id', loginRequired, alunoController.delete)

export default route
