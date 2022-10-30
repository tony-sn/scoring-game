import { Handler } from "@netlify/functions";

const handler: Handler = async (_event, _context) => {
  // test Netlify serverless function
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello World",
    }),
  };
};

export { handler };
