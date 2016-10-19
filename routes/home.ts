import * as express from 'express';

import { Router } from 'express';
let router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', { title: 'Express', post: [
        {title: 4},
        {title: 2}
    ] });
});

export let home = router;
