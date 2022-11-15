interface EventHeaders {
  [name: string]: string | undefined;
  authorization: string;
}

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
