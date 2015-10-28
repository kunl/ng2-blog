
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import router from './router';
import path from 'path';

let app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'abcdef',
    resave: true,
    saveUninitialized: false,
    key: 'sid',
    cookie: {
        maxAge: 1000*60*60
    }
}));

app.use(router);

app.listen(2000, ()=> console.log('running on port 2000 ...'));

export default app;