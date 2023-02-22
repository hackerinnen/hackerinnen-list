type ResourceFields = {
  name: string;
  public: boolean;
  brand: string;
  description: string;
  tags: string[];
  website: string;
  facebook: string;
  twitter: string;
  instagram: string;
  newsletter: string;
  youtube: string;
  twitch: string;
  tikTok: string;
  podcast: string;
  telegram: string;
  meetup: string;
  email: string;
  blog: string;
  book: string;
  kids: boolean;
  region: string;
  cities: string[];
  language: string;
  "create date": string;
  "update date": string;
};

export type Resource = {
  id: string;
  createdTime: string;
  fields: ResourceFields;
};
