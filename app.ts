
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import router from './router';
import * as path from 'path';

let app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
    secret: 'abcdef',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60
    }
}));

app.use(router);

let port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`running on port ${port} ...`));

export default app;