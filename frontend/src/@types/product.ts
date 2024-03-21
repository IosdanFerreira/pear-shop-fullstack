import { ICategory } from './category';

export interface IProduct {
    id: number | string;
    name: string;
    nameUnnacent: string;
    description: string;
    descriptionUnaccent: string;
    defaultImageUrl: string;
    secondariesImageUrl: {
        url: string
    }[];
    price: number;
    discount: number;
    priceWithDiscount: number;
    stock: number;
    sold: number;
    rate: number;
    available: boolean;
    categories: {
        category: ICategory
    }[];
    UfOrigin: string
}