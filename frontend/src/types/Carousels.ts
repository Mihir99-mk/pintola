export type RootObject = {
  data: Datum2[];
  meta: Meta;
}

export type Meta = {
  pagination: Pagination;
}

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export type Datum2 = {
  id: number;
  attributes: Attributes2;
}

export type Attributes2 = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export type Image = {
  data: Datum[];
}

export type Datum = {
  url: string | undefined;
  width: string | number | undefined;
  height: string | number | undefined;
  caption: string;
  id: number;
  attributes: Attributes;
}

export type Attributes = {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

export type Formats = {
  thumbnail: Thumbnail;
  medium: Thumbnail;
  large: Thumbnail;
  small: Thumbnail;
}

export type Thumbnail = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}