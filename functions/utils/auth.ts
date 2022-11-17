interface EventHeaders {
  [name: string]: string | undefined;
  authorization: string;
}

import { promisify } from "util";

const jwt = require("jsonwebtoken");
const jwks = require("jwks-rsa");
const jwksClient = jwks({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  audience: process.env.AUTH0_AUDIENCE,
});

const getAccessTokenFromHeaders = (headers: Partial<EventHeaders>) => {
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

const validateAccessToken = async (token) => {
  try {
    const decodedToken = jwt.decode(token, { complete: true });
    console.log(
      "%c decoded token Log: ",
      "color: lightGreen; font-weight: 600",
      decodedToken
    );

    const kid = decodedToken.header.kid;
    const alg = decodedToken.header.alg;

    const getSigningKey = promisify(jwksClient.getSigningKey);
    const key = await getSigningKey(kid);
    const signingKey = key.publicKey;

    const options = { algorithms: alg };
    jwt.verify(token, signingKey, options);
    return decodedToken.payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAccessTokenFromHeaders, validateAccessToken };
