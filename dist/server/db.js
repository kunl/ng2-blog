"use strict";
const mongoose = require("mongoose");
exports.uri = 'mongodb://localhost/blog';
mongoose.Promise = Promise;
mongoose.connect(exports.uri, (err) => {
    if (err) {
        console.log(err);
        console.log(err.message);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose;
//# sourceMappingURL=db.js.map