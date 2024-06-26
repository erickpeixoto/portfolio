export interface NotionDatabaseResponse {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
}

export interface NotionCallResponse {
  posts: Post[];
  next_cursor: any;
  has_more: boolean;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: any;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Images {
  id: string;
  type: "rich_text";
  rich_text: RichText[];
}

export interface Description {
  id: string;
  type: "rich_text";
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Properties {
  tags: Tags;
  slug: Slug;
  title: Title;
  createdAt: NotionDate;
  image?: Images;
  description?: Description;
}

export interface Post {
  id: string;
  title: string;
  slug?: string;
  tags: string[];
  createdAt: string;
  html?: string;
  description?: string;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Slug {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Title {
  id: string;
  type: string;
  title: Title2[];
}

export interface Title2 {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: any;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface NotionDate {
  id: string;
  type: "date";
  date: {
    start: string;
    end: string | null;
  } | null;
}

export interface PageOrDatabase {}
