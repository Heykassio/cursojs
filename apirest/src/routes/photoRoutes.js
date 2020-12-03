import { Router } from 'express';
import LoginRequired from '../middlewares/loginRequired';

import Photocontroller from '../controllers/PhotoController';

const route = new Router();

route.post('/', LoginRequired, Photocontroller.store);

export default route;
