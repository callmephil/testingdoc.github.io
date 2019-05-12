import Express from 'express'
import passport from 'passport/lib';
import {checkAuth} from '../Middleware/auth2';

const app = Express();
const scopes = ['identify', 'email'];


app.get('/', passport.authenticate('discord', { scope: scopes }), function(req, res) {});

app.get('/callback', function (req, res, next) {

    // passport.authenticate("twitter", {
    //     successRedirect: CLIENT_HOME_PAGE_URL,
    //     failureRedirect: "/auth/login/failed"
    // })
    passport.authenticate('discord', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('http://localhost:3000/login');
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }


            return res.redirect('http://localhost:3000/' + user.username);
        });
    })(req, res, next);
});
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
app.get('/info', checkAuth, function (req, res) {
    //console.log(req.user)
    res.json(req.user);
});

export default app;
