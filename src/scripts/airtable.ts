import Airtable from "airtable";
import type { Resource, EnhancedResource } from "../types";
import { filterData } from "../data/filterData";
import { sampleData } from "../data/sampleData";
import chalk from "chalk";

const discardedFields = [
  "name",
  "public",
  "brand",
  "description",
  "tags",
  "region",
  "cities",
  "language",
  "audience",
  "create date",
  "update date",
];

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: import.meta.env.SECRET_AIRTABLE_ACCESS_TOKEN,
});

const base = Airtable.base("appk277pk5PlGpVFt");

const fetchData = async () => {
  return new Promise<Resource[]>((resolve, reject) => {
    // https://airtable.com/appk277pk5PlGpVFt/api/docs#curl/table:resources
    let data: Resource[] = [];
    base("tblEnh7pNKnZSwgdl")
      .select({
        maxRecords: 300,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            data.push(record._rawJson);
          });

          console.log(`${chalk.blue("[airtable]")} Fetch next page...`);
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          console.log(`${chalk.blue("[airtable]")} Done fetching data`);
          if (err) {
            return reject(err);
          }
          return resolve(data);
        }
      );
  });
};

const getEntries = async () => {
  let apiResults = [];
  if (import.meta.env.DEV) {
    apiResults = sampleData;
  } else {
    console.log(`${chalk.blue("[airtable]")} Fetch data...`);
    apiResults = await fetchData();
  }

  apiResults = apiResults.filter((result) => result.fields.public);

  const results = apiResults.map((result): EnhancedResource => {
    let fields = Object.keys(result.fields);

    fields = fields.filter((field) => !discardedFields.includes(field));

    let tags = [];
    filterData.interests.forEach((item) => {
      if (result.fields.tags.some((tag) => item.tags.includes(tag))) {
        tags.push(item.key);
      }
    });

    fields = [...fields, ...tags];

    return {
      ...result,
      tags: fields,
    };
  });

  return results;
};

export { getEntries };
