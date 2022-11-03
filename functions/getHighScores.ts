import { Handler } from "@netlify/functions";
import { getHighScores } from "./utils/airtable";

const handler: Handler = async (_event) => {
  try {
    const records = await getHighScores(true);

    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Failed to query records" }),
    };
  }
};

export { handler };
