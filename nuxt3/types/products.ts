export interface MediaAttributes {
  name: string;
  formats: any;
  url: string;
}

export interface Media {
  id: number;
  attributes: MediaAttributes;
}

export interface Medias {
  data: Media[];
}

export interface ProductAttributes {
  name: string
  price: number
  medias: Medias
  video?: Media
  description?: string
  details?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Product {
  id: number
  attributes: ProductAttributes
}

export interface ProductsResponse {
  data: Product[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type Products = Product[]
