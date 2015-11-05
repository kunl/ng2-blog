import { Router } from 'express';

import home from './home';
import login from './login';
import admin from './admin';

import postDetail from './post_detail';
import tag from './tag';

let router = Router();


router.get('/', home);
router.get('/:title', postDetail);
router.get('/tag/:tagName', tag)

router.use('/admin', admin);
router.use('/login', login);


export default router;