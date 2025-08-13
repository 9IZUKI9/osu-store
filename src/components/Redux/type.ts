export interface CartItem {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
    totalItems: number;
}
