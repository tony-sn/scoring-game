interface EventHeaders {
  [name: string]: string | undefined;
  authorization: string;
}

const jwt = require("jsonwebtoken");
const jwks = require("jwks-rsa");
const jwksClient = jwks({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  audience: process.env.AUTH0_AUDIENCE,
});

const { promisify } = require("util");

export const getAccessTokenFromHeaders = (headers: Partial<EventHeaders>) => {
  const rawAuthorization = headers.authorization;
  if (!rawAuthorization) {
    return null;
  }

  const authorizationParts = rawAuthorization.split(" ");
  if (authorizationParts[0] !== "Bearer" || authorizationParts.length !== 2) {
    return null;
  }
  const accessToken = authorizationParts[1];
  return accessToken;
};

const validateAccessToken = (token) => {
  try {
    const decodedToken = jwt.decode(token, { complete: true });
    const kid = decodedToken.header.kid;
    const getSigningKey = promisify(jwksClient.getSigningKey);
  } catch (error) {
    console.error(error);
    return null;
  }
};
