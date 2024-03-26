export type ProductDetail = {
  name: string;
  image: string;
  description: string;
  price: string;
};


export type Product = {
  img: string
  name: string
  discount: number
  price: number
  options: string[]
}


export type RootObject = {
  data: Datum3[];
  meta: Meta;
}

export type Meta=  {
  pagination: Pagination;
}

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export type Datum3 = {
  id: number;
  attributes: Attributes4;
}

export type Attributes4 = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  productName: string;
  Price: number;
  Discount: number;
  productDescription: string;
  shelfLife: number;
  variants: Variants;
  all_natural_and_organic: Allnaturalandorganic;
  productImage: ProductImage;
}

export type ProductImage = {
  data: Datum2[];
}

export type Datum2 = {
  id: number;
  attributes: Attributes3;
}

export type Attributes3 = {
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
  small: Thumbnail;
  medium: Thumbnail;
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

export type Allnaturalandorganic = {
  data: Data;
}

export type Data = {
  id: number;
  attributes: Attributes2;
}

export type Attributes2 = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type Variants = {
  data: Datum[];
}

export type Datum = {
  id: number;
  attributes: Attributes;
}

export type Attributes ={
  variant: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
