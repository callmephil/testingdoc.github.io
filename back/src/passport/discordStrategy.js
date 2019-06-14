// const discordStrategy = require('passport-discord').Strategy;
import {Strategy as discordStrategy} from 'passport-discord';

import getConnection from '../Database/Connection';

const scopes = ['identify', 'email'];
const strategy = new discordStrategy({
    clientID: '574980341211725835',
    clientSecret: '9eS17F6ODkjyr6_AhpY18hfNsfJ9exWO',
    callbackURL: 'http://localhost:8080/discord/callback',
    scope: scopes,
}, async function (accessToken, refreshToken, profile, cb) {
    const connection = await getConnection();
    if (connection) {
        const {usersController} = connection;
        const user = usersController.getUserByEmail(profile.email)

        console.log('profile => ', profile);
        if (user === undefined) {
            await usersController.createUser({
                firstname: '',
                lastname: '',
                email: profile.email,
                discordId: profile.id,
                phoneNumber: '',
                refresh_token: refreshToken,
            })
            const new_user = usersController.getUserByEmail(profile.email)
            console.log(' new_user => ', new_user)
            return cb(null, new_user);
        } else {
            return cb(null, user)
        }
    }
});

export default strategy;
