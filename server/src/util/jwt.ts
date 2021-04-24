const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const {
    AUTH0_AUDIENCE,
    AUTH0_ISSUER_URL,
} = process.env

console.log(`${AUTH0_ISSUER_URL}.well-known/jwks.json`)

export const checkJWT = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        jwksUri: `${AUTH0_ISSUER_URL}.well-known/jwks.json`
    }),
    // The same audience parameter needs to be used by the client to configure their Auth0 SDK
    audience: AUTH0_AUDIENCE,
    // The Auth0 domain
    issuer: AUTH0_ISSUER_URL,
    // Has to be RS256 because that's what Auth0 uses to sign it's tokens
    algorithms: ["RS256"],
})
