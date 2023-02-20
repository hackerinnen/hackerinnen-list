type AirtableFields = {
  Cities: string[];
  Webseite: string;
  Beschreibung: string;
  Newsletter: string;
  Name: string;
  Datum: string;
  Tags: string[];
  Sprache: string;
  Region: string;
};

export type AirtableRow = {
  id: string;
  createdTime: string;
  fields: AirtableFields;
};
