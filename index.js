var express = require('express');
var router = require('./router');
var app = express();
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(2000, function(){
    console.log('running on port 2000 ...')
});