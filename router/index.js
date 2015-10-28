import { Router } from 'express';

import home from './home';
import login from './login';

let router = Router();
router.get('/', home);


router.use('/login', login);

export default router;