var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var router = require('./router');
var app = express();
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'abcdefghijklmnopqrstuvwxyz'
}));

app.use(router);

app.listen(2000, function(){
    console.log('running on port 2000 ...')
});