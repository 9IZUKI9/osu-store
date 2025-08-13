import { useState } from 'react';
import ProductItem from './Product/ProductItem.tsx';
import Page from '../Page/Page.tsx';
import styles from './Product/Product.module.css';
import { Product } from './Product/ProductTypes';

function Home() {
    const [products] = useState<Product[]>([
        { id: 1, bg: 'assets/products/supporter.jpg', row: '1', column: '1/2', width: '970px', height: '300px', name: 'osu!supporter tag', fontSize: '40px', price: 4.00 },
        { id: 2, bg: 'assets/products/deskmats.jpg', row: '2', column: '1/2', width: '970px', height: '300px', name: 'osu! deskmats', fontSize: '40px', price: 32.00 },
        { id: 3, bg: 'assets/products/keycaps.jpg', row: '3', column: '1', name: 'osu! keycaps', price: 15.00 },
        { id: 4, bg: 'assets/products/socks.jpg', row: '3', column: '2', name: 'osu! socks', price: 30.00 },
        { id: 5, bg: 'assets/products/tubes.jpg', row: '4', column: '1', name: 'osu! neck tubes/gaiters', price: 12.00 },
        { id: 6, bg: 'assets/products/keychain.jpg', row: '4', column: '2', name: 'osu! keychain/lanyard set', price: 15.00 },
        { id: 7, bg: 'assets/products/pippi.jpg', row: '5', column: '1', name: 'let\'s play with pippi!', price: 24.00 },
        { id: 8, bg: 'assets/products/yuzu.jpg', row: '5', column: '2', name: 'let\'s play with yuzu!', price: 24.00 },
        { id: 9, bg: 'assets/products/mocha.jpg', row: '6', column: '1', name: 'let\'s play with mocha!', price: 24.00 },
        { id: 10, bg: 'assets/products/slider.jpg', row: '6', column: '2', name: 'osu! "slider" t-shirt', price: 24.00 },
        { id: 11, bg: 'assets/products/lanyard.jpg', row: '7', column: '1', name: 'osu! lanyard (slider)', price: 7.27 },
        { id: 12, bg: 'assets/products/stickers.jpg', row: '7', column: '2', name: 'osu! "certified" sticker sets', price: 5.00 },
        { id: 13, bg: 'assets/products/buttons.jpg', row: '8', column: '1', name: 'osu!buttons', price: 10.00 },
        { id: 14, bg: 'assets/products/name-change.jpg', row: '8', column: '2', name: 'Player Name Change', price: 8.00 },
        { id: 15, bg: 'assets/products/tablet.jpg', row: '9', column: '1', name: 'osu!tablet', price: 28.00 }
    ])

    return (
        <Page>
            <div className={styles.products}>
                {products.map(product => (
                    <ProductItem 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </Page>
    );
}

export default Home
