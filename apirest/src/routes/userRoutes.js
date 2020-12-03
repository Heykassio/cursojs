import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const route = new Router();

// não deveria existir
// route.get('/', UserController.index);
// route.get('/:id', UserController.show);

// route.post('/', UserController.create);
route.put('/', loginRequired, UserController.update);
route.delete('/', loginRequired, UserController.delete);
export default route;
