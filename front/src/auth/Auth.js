import auth0 from "auth0-js";

const AUTH0_DOMAIN = '';
const AUTH0_CLIENT_ID = '';
const REDIRECT_URI = 'localhost:3000'

let idToken = null;
let profile = null;
let expiresAt = null;

const auth0Client = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    audience: `https://${AUTH0_DOMAIN}/userinfo`,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: `http://${REDIRECT_URI}/callback`,
    responseType: "id_token",
    scope: "openid profile"
});

export const handleAuthentication = async () => {
    return new Promise((resolve, reject) => {
        auth0Client.parseHash((err, authResult) => {
            if (err) {
                return reject(err);
            }
            if (!authResult || !authResult.idToken) {
                return reject(new Error('user was not registered'))
            }
            setSession(authResult)
            resolve(profile);
        });
    });
};

export const setSession = (authResult) => {
    idToken = authResult.idToken;
    profile = authResult.idTokenPayload;

    expiresAt = authResult.idTokenPayload.exp * 1000;
}

export const signOut = () => {
    idToken = null;
    profile = null;
    expiresAt = null;
    auth0Client.logout( {
        returnTo: `http://${REDIRECT_URI}`,
        clientID: AUTH0_CLIENT_ID,
    });
}

export const getProfile = () => profile;

export const getIdToken = () => idToken;

export const isAuthenticated = () => new Date().getTime() < expiresAt;

export const signIn = () => auth0Client.authorize();

export const silentAuth = () => {
    return new Promise((resolve, reject) => {
        auth0Client.checkSession({}, (err, authResult) => {
            if (err) {
                return reject(err);
            }
            setSession(authResult);
            resolve(profile);
        })
    })
}