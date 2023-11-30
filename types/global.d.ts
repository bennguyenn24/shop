interface Product {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
    price: number;
}

interface CartItem {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
    price: number;
    quantity: number;
}

interface CartContextProps {
    cart: [];
    addToCart: (product: any) => void;
    removeFromCart: (id: number) => void;
}