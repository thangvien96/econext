export interface IProduct {
    id: string,
    name: string,
    price: number,
    description: string,
    image: any,
    tag?: string,
    slug: string,
    quantity: number,
    viewCount: number,
    isFeatured: boolean,
}

export interface IProductGroup {
    "id": number,
    "documentId": string,
    "name": string,
    "description": string,
    "createdAt": string,
    "updatedAt": string,
    "publishedAt": string,
    "slug": string,
}