export interface Product {
    id: number;
    name: string;
    description: string;
    picUrl: string;
    type?: string;
    price: number;
    brand: string;
    quantityInStock?: number;

}