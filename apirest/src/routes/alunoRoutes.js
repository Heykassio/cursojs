import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const route = new Router();

route.get('/', AlunoController.index);
route.get('/:id', AlunoController.show);
route.post('/', loginRequired, AlunoController.store);
route.put('/:id', loginRequired, AlunoController.update);
route.delete('/:id', loginRequired, AlunoController.delete);

export default route;
