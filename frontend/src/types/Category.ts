export interface RootObject {
  data: Datum[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}