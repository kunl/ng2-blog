"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// import pool from './db';
var dateformat = require('dateformat');
var mongoose = require('mongoose');
var mongoose_1 = require('mongoose');
exports.ObjectId = mongoose.Schema.Types.ObjectId;
exports.Mixed = mongoose.Schema.Types.Mixed;
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    amountPeopleSaved: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        var doc = this._doc;
        var now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});
exports.HeroSchema = mongoose.model('hero', schema, 'heroes', true);
var HeroModel = (function () {
    function HeroModel(heroModel) {
        this._heroModel = heroModel;
    }
    Object.defineProperty(HeroModel.prototype, "name", {
        get: function () {
            return this._heroModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "power", {
        get: function () {
            return this._heroModel.power;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "amountPeopleSaved", {
        get: function () {
            return this._heroModel.amountPeopleSaved;
        },
        enumerable: true,
        configurable: true
    });
    HeroModel.createHero = function (name, power) {
        var p = new Promise(function (resolve, reject) {
            var repo = new HeroRepository();
            var hero = {
                name: name,
                power: power,
                amountPeopleSaved: 0
            };
            repo.create(hero, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    HeroModel.findHero = function (name) {
        var p = new Promise(function (resolve, reject) {
            var repo = new HeroRepository();
            repo.find({ name: name }).sort({ createdAt: -1 }).limit(1).exec(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res[0]);
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
        return p;
    };
    return HeroModel;
}());
exports.HeroModel = HeroModel;
Object.seal(HeroModel);
var RepositoryBase = (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.create = function (item, callback) {
        this._model.create(item, callback);
    };
    RepositoryBase.prototype.retrieve = function (callback) {
        this._model.find({}, callback);
    };
    RepositoryBase.prototype.update = function (_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    };
    RepositoryBase.prototype.delete = function (_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, function (err) { return callback(err, null); });
    };
    RepositoryBase.prototype.findById = function (_id, callback) {
        this._model.findById(_id, callback);
    };
    RepositoryBase.prototype.findOne = function (cond, callback) {
        return this._model.findOne(cond, callback);
    };
    RepositoryBase.prototype.find = function (cond, fields, options, callback) {
        return this._model.find(cond, options, callback);
    };
    RepositoryBase.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return RepositoryBase;
}());
exports.RepositoryBase = RepositoryBase;
var HeroRepository = (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        _super.call(this, exports.HeroSchema);
    }
    return HeroRepository;
}(RepositoryBase));
exports.HeroRepository = HeroRepository;
Object.seal(HeroRepository);
var uri = 'mongodb://localhost/heroes';
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
HeroModel.createHero('Steve', 'Flying').then(function (res) {
    console.log('### Created Hero ###');
    console.log(res);
    HeroModel.findHero('Steve').then(function (res) {
        console.log('### Found Hero ###');
        console.log(res);
        // now update the Hero
        var hero = res;
        hero.power = 'Invisibility';
        hero.save(function (err, res) {
            if (err) {
                console.log(err.message);
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    }, function (err) {
        if (err) {
            console.log(err.message);
        }
    });
}, function (err) {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
});
var PostModel = (function () {
    function PostModel(post) {
        this.title = '';
        this.content = '';
        this.author = '';
        this.createDate = new Date();
        this.updateDate = new Date();
        this.title = post.title;
        this.content = post.content;
        this.author = post.author;
    }
    return PostModel;
}());
exports.PostModel = PostModel;
var default_1 = (function () {
    function default_1(post) {
        this.post = null;
        this.post = new PostModel(post);
    }
    default_1.prototype.save = function () {
        var _this = this;
        console.log('插入文章', this.post.title);
        return new Promise(function (resolve, reject) {
            var post = _this.post;
            pool.getConnection(function (err, connection) {
                connection.query('INSERT INTO posts SET ?', post, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            });
        });
    };
    default_1.getHomePost = function () {
        var colums = "\n            SELECT\n            title, content, updateDate, author, posts.tagId, tagName\n            FROM posts, tags where posts.tagId = tags.tagId LIMIT 0,6\n            ";
        var contentTags = "\n            SELECT GROUP_CONCAT(distinct tagname) AS tags,title, content, createDate ,author, posts.id\n            FROM tags\n            LEFT JOIN posttag\n            ON tags.tagid = posttag.tagid\n            RIGHT JOIN posts\n            ON posttag.postid = posts.id\n            GROUP BY posts.id\n            LIMIT 0,6\n        ";
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    throw err;
                }
                connection.query(contentTags, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result.map(function (post) {
                        post.createDate = dateformat(post.createDate, 'yyyy年mm月dd日 HH:MM:ss');
                        post.tags = post.tags ? post.tags.split(',') : [];
                        return post;
                    }));
                    connection.release();
                });
            });
        });
    };
    default_1.getPosts = function () {
        var colums = ['title', 'content', 'createDate', 'updateDate', 'author', 'tag'];
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                connection.query('SELECT ?? FROM posts', [colums], function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            });
        });
    };
    default_1.getPostByTitle = function (title) {
        var sql = "\n            SELECT title, content, createDate, updateDate, author\n            FROM posts where title = '" + title + "'\n        ";
        console.log(title, 'db');
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                connection.query(sql, function (err, post) {
                    if (err) {
                        reject(err);
                    }
                    resolve(post && post[0]);
                    connection.release();
                });
            });
        });
    };
    return default_1;
}());
exports.__esModule = true;
exports["default"] = default_1;
