"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const express_1 = require("express");
let _router = express_1.Router();
_router.get('/tags', (req, res, next) => {
    models_1.Tag.find({}).exec().then(tags => res.json(tags), err => console.log(err));
});
exports.tag = _router;
//# sourceMappingURL=tag.js.map