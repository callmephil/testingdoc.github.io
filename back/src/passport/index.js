import passport from 'passport';
import {executeToDatabase, prepareStmt} from '../Database/Controller/PreparedStatement';
import DiscordStrategy from './discordStrategy';

const {USER_SELL_EMAIL} = prepareStmt;
import getConnection from '../Database/Connection';

// const User = require('../database/models/user')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
    console.log('*** serializeUser called, user: ')
    console.log('user => ', user) // the whole raw user object!
    console.log('---------')
    done(null, {_id: user.discordId})
})

// user object attaches to the request as req.user
passport.deserializeUser(async (id, done) => {
    console.log('DeserializeUser called')
    const connection = await getConnection();
    console.log('id => ', id)
    if (connection) {
        const {usersController} = connection;
        const user = usersController.getUserByDiscordId(id._id)
        console.log('user2 => ', user);
        done(null, user)
    }

})

//  Use Strategies
passport.use('discords', DiscordStrategy);

export default passport;
