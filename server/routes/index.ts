import { Router } from 'express';

import { home } from './home';
import { user } from './user';
import { post } from './post';
import { tag } from './tag';

// import login from './login';
import { admin } from './admin';


let router = Router();

// router.use(home);
router.use(user);
router.use(post);
router.use(tag);

// router.use(admin);

// router.get('/:title', postDetail);
// router.get('/tag/:tagName', tag)

// router.use('/login', login);


export default router;