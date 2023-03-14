type ResourceFields = {
  name?: string;
  public?: boolean;
  new?: boolean;
  brand?: string;
  description?: string;
  tags?: string[];
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  newsletter?: string;
  youtube?: string;
  twitch?: string;
  tikTok?: string;
  podcast?: string;
  telegram?: string;
  meetup?: string;
  linkedin?: string;
  discord?: string;
  email?: string;
  blog?: string;
  book?: string;
  region?: string;
  cities?: string[];
  language?: string[];
  audience?: string[];
  "create date"?: string;
  "update date"?: string;
};

export type Resource = {
  id: string;
  createdTime: string;
  fields: ResourceFields;
};

export interface EnhancedResource extends Resource {
  tags: string[];
}
