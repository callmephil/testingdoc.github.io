import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'

const AUTH0_DOMAIN = 'callmephil.eu.auth0.com'
const AUTH0_CLIENT_ID = '3ydodpyCgj70jV2ZbVBk0qElKuEP0tJv'

export const isLoggedIn = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: AUTH0_CLIENT_ID,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});
