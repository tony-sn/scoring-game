import { Handler } from "@netlify/functions";

interface Record {
  id: string;
  fields: {
    name: string;
    score: string;
  };
}

const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.VITE_AIRTABLE_API_KEY,
}).base(process.env.VITE_AIRTABLE_BASE);

const table = base(process.env.VITE_AIRTABLE_TABLE);

const handler: Handler = async (_event) => {
  try {
    const records = await table
      .select({
        sort: [{ field: "score", direction: "desc" }],
        filterByFormula: `AND(name != "", score > 0)`,
      })
      .firstPage();
    const formattedRecords = records.map((record: Partial<Record>) => ({
      id: record.id,
      fields: record.fields,
    }));
    return {
      statusCode: 200,
      body: JSON.stringify(formattedRecords),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Failed to query records" }),
    };
  }
};

export { handler };
