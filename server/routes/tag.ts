import { Tag } from '../models'
import { Router } from 'express';

let _router = Router();

_router.get('/tags', (req, res, next) => {
    Tag.find({}).exec().then(tags => res.json(tags), err => console.log(err))
});

export let tag =  _router;