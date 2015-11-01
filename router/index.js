import { Router } from 'express';

import home from './home';
import login from './login';
import admin from './admin';

import postDetail from './post_detail';

let router = Router();

router.use('/login', login);
router.use('/admin', admin);

router.get('/', home);
router.get('/:title', postDetail);

export default router;