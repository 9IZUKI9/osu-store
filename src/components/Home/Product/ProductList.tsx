import React from "react"
import ProductItem from "./ProductItem"
import { Product } from "./ProductTypes"

const products: Product[] = [
    {
        id: 1,
        name: 'osu!supporter tag',
        price: 4.00,
        bg: '/public/assets/products/supporter.jpg'
    },

    {
        id: 2,
        name: 'osu! deskmats',
        price: 32.00,
        bg: '/public/assets/products/deskmats.jpg'
    },

    {
        id: 3,
        name: 'osu! socks',
        price: 30.00,
        bg: '/public/assets/products/socks.jpg'
    },

    {
        id: 4,
        name: 'osu! neck tubes/gaiters',
        price: 12.00,
        bg: 'public/assets/products/tubes.jpg'
    },

    {
        id: 5,
        name: 'osu! keychain/lanyard',
        price: 15.00,
        bg: 'public/assets/products/keychain.jpg'
    },

    {
        id: 6,
        name: "let's play with pippi",
        price: 24.00,
        bg: 'public/assets/products/pippi.jpg'
    },

    {
        id: 7,
        name: "let's play with yuzu!",
        price: 24.00,
        bg: 'public/assets/products/yuzu.jpg'
    },

    {
        id: 8,
        name: "let's play with mocha!",
        price: 24.00,
        bg: 'public/assets/products/mocha.jpg'
    },

    {
        id: 9,
        name: 'osu! "slider" t-shirt',
        price: 24.00,
        bg: 'public/assets/products/slider.jpg'
    },
    
    {
        id: 10,
        name: 'osu! lanyard (slider)',
        price: 7.27,
        bg: 'public/assets/products/lanyard.jpg'
    },

    {
        id: 11,
        name: 'osu! "certified" sticker sets',
        price: 5.00,
        bg: 'public/assets/products/stickers.jpg'
    },

    {
        id: 12,
        name: 'osu!buttons',
        price: 10.00,
        bg: 'public/assets/products/buttons.jpg'
    },

    {
        id: 13,
        name: 'Player Name Change',
        price: 8.00,
        bg: 'public/assets/products/name-change.jpg'
    },

    {
        id: 14,
        name: 'osu!tablet',
        price: 28.00,
        bg: 'public/assets/products/tablet.jpg'
    }
]

function ProductList() {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
  );
}

export default ProductList;