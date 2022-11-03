import Record from "../index";

const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.VITE_AIRTABLE_API_KEY,
}).base(process.env.VITE_AIRTABLE_BASE);

export const table = base(process.env.VITE_AIRTABLE_TABLE);

export const getHighScores = async (filterEmptyRecords) => {
  const queryOptions = {
    sort: [{ field: "score", direction: "desc" }],
    filterByFormula: "",
  };
  if (filterEmptyRecords) {
    queryOptions.filterByFormula = `AND(name != "", score > 0)`;
  }
  const records = await table.select(queryOptions).firstPage();
  const formattedRecords = records.map((record: Partial<Record>) => ({
    id: record.id,
    fields: record.fields,
  }));
  return formattedRecords;
};
