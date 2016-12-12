"use strict";
var models_1 = require("../models");
var express_1 = require("express");
var _router = express_1.Router();
_router.get('/tags', function (req, res, next) {
    models_1.Tag.find({}).exec().then(function (tags) { return res.json(tags); }, function (err) { return console.log(err); });
});
exports.tag = _router;
