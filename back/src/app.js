// back/src/app.js
import express from 'express'
import cookieParser from 'cookie-parser' // parses cookies
import session from 'express-session' // parses sessions
import favicon from 'serve-favicon' // serves favicon
import cors from 'cors' // allows cross-domain requests
import createError from 'http-errors' // better JS errors
import bodyParser from 'body-parser'; // middleware to handle HTTP requests

import path from 'path'
import helmet from 'helmet'
import passport from 'passport'
import {Strategy} from 'passport-discord';
import discordRefresh from 'passport-oauth2-refresh';
import {checkAuth} from './Middleware/auth2';

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

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

const scopes = ['identify', 'email'];

const discordStrat = new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/discord/callback',
    scope: scopes,
}, function (accessToken, refreshToken, profile, done) {
    profile.refreshToken = refreshToken;
    process.nextTick(function () {
        return done(null, profile);
    });
});
passport.use(discordStrat);
discordRefresh.use(discordStrat);

discordRefresh.requestNewAccessToken('discord', profile.refreshToken, function(err, accessToken, refreshToken) {
    if (err)
        throw err; // boys, we have an error here.

    profile.accessToken = accessToken; // store this new one for our new requests!
});

app.use(session({ // handles sessions
    secret: process.env.SESSION_SECRET, // <-- this should be a secret phrase
    cookie: {secure: IS_PRODUCTION}, // <-- secure only in production
    resave: true,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

export default app
