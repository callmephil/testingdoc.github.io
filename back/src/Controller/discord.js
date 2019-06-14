import Express from 'express';
import passport from '../passport';

const app = Express();

export default async () => {
    app.get('/callback', function (req, res, next) {
        passport.authenticate('discords',  function (err, user, info) {
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
                req.session.access_token = '';
                return res.redirect('http://localhost:3000/discord/callback');
            });
        })(req, res, next);
    });
    return app;
}
