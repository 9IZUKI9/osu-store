import React from "react"
import ProductItem from "./ProductItem"
import { Product } from "./ProductTypes"

const products: Product[] = [
    {
        id: 1,
        name: 'osu!supporter tag',
        price: 4.00,
        bg: '/public/assets/products/supporter.jpg',
        page: '/osu-store/products/1'
    },

    {
        id: 2,
        name: 'osu! deskmats',
        price: 32.00,
        bg: '/public/assets/products/deskmats.jpg',
        page: '/osu-store/products/2'
    },

    {
        id: 3,
        name: 'osu! socks',
        price: 30.00,
        bg: '/public/assets/products/socks.jpg',
        page: '/osu-store/products/3'
    },

    {
        id: 4,
        name: 'osu! neck tubes/gaiters',
        price: 12.00,
        bg: 'public/assets/products/tubes.jpg',
        page: '/osu-store/products/4'
    },

    {
        id: 5,
        name: 'osu! keychain/lanyard',
        price: 15.00,
        bg: 'public/assets/products/keychain.jpg',
        page: '/osu-store/products/5'
    },

    {
        id: 6,
        name: "let's play with pippi",
        price: 24.00,
        bg: 'public/assets/products/pippi.jpg',
        page: '/osu-store/products/6'
    },

    {
        id: 7,
        name: "let's play with yuzu!",
        price: 24.00,
        bg: 'public/assets/products/yuzu.jpg',
        page: '/osu-store/products/7'
    },

    {
        id: 8,
        name: "let's play with mocha!",
        price: 24.00,
        bg: 'public/assets/products/mocha.jpg',
        page: '/osu-store/products/8'
    },

    {
        id: 9,
        name: 'osu! "slider" t-shirt',
        price: 24.00,
        bg: 'public/assets/products/slider.jpg',
        page: '/osu-store/products/9'
    },
    
    {
        id: 10,
        name: 'osu! lanyard (slider)',
        price: 7.27,
        bg: 'public/assets/products/lanyard.jpg',
        page: '/osu-store/products/10'
    },

    {
        id: 11,
        name: 'osu! "certified" sticker sets',
        price: 5.00,
        bg: 'public/assets/products/stickers.jpg',
        page: '/osu-store/products/11'
    },

    {
        id: 12,
        name: 'osu!buttons',
        price: 10.00,
        bg: 'public/assets/products/buttons.jpg',
        page: '/osu-store/products/12'
    },

    {
        id: 13,
        name: 'Player Name Change',
        price: 8.00,
        bg: 'public/assets/products/name-change.jpg',
        page: '/osu-store/products/13'
    },

    {
        id: 14,
        name: 'osu!tablet',
        price: 28.00,
        bg: 'public/assets/products/tablet.jpg',
        page: '/osu-store/products/14'
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