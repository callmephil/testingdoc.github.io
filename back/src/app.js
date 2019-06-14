// back/src/app.js
import express from 'express'
import cookieParser from 'cookie-parser' // parses cookies
import session from 'express-session' // parses sessions
import favicon from 'serve-favicon' // serves favicon
import cors from 'cors' // allows cross-domain requests
import createError from 'http-errors' // better JS errors
import bodyParser from 'body-parser'; // middleware to handle HTTP requests

import morgan from 'morgan'
import path from 'path'
import helmet from 'helmet'

import passport from './passport';

require('dotenv').config();

const app = express(); // create a new app

const IS_PRODUCTION = app.get('env') === 'production'

if (IS_PRODUCTION) {
    app.set('trust proxy', 1) // secures the app if it is running behind Nginx/Apache/similar
}


app.use(helmet()) // make it the first thing your express app uses
app.use(cors()) // allows cross domain requests
app.use(express.json()); // allows POST requests with JSON
app.use(express.urlencoded({extended: false})); // allows POST requests with GET-like parameters
app.use(cookieParser()); // Parses cookies
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico'))) // <-- location of your favicon
app.use(express.static(path.join(__dirname, '../public'))); // <-- location of your public dir
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use(morgan('dev'))

// Sessions
app.use(
    session({
        secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
        // store: new MongoStore({mongooseConnection: dbConnection}), //TODO: as default express-session will use a lightweight memory store.
        resave: false, //required
        saveUninitialized: false, //required
    }),
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});
export default app
