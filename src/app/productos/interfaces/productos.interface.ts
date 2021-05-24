export interface Producto {
    name: string;
    cod: string;
    stock: string;
    price: string;
    offertPrice: number;
    category: string;
    status: boolean;
}

export interface Categoria {
    _id: string;
    name: string;
    status: boolean;
}