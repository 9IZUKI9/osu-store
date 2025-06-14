import { useState } from 'react'
import Product from './Product/Product.tsx'
import Page from '../Page/Page.tsx'
import styles from './Product/Product.module.css'

function Home() {
    const products = [
    {bg:'assets/products/supporter.jpg', row:'1', column:'1/2', width:'970px', height:'300px', name:'osu!supporter tag', fontSize:'40px'},
    {bg:'assets/products/deskmats.jpg', row:'2', column:'1/2', width:'970px', height:'300px', name:'osu! deskmats', fontSize:'40px'},
    {bg:'assets/products/keycaps.jpg', row:'3', column:'1', name:'osu! keycaps'},
    {bg:'assets/products/socks.jpg', row:'3', column:'2', name:'osu! socks'},
    {bg:'assets/products/tubes.jpg', row:'4', column:'1', name:'osu! neck tubes/gaiters'},
    {bg:'assets/products/keychain.jpg', row:'4', column:'2', name:'osu! keychain/lanyard set'},
    {bg:'assets/products/pippi.jpg', row:'5', column:'1', name:'let\'s play with pippi!'},
    {bg:'assets/products/yuzu.jpg', row:'5', column:'2', name:'let\'s play with yuzu!'},
    {bg:'assets/products/mocha.jpg', row:'6', column:'1', name:'let\'s play with mocha!'},
    {bg:'assets/products/slider.jpg', row:'6', column:'2', name:'osu! "slider" t-shirt'},
    {bg:'assets/products/lanyard.jpg', row:'7', column:'1', name:'osu! lanyard (slider)'},
    {bg:'assets/products/stickers.jpg', row:'7', column:'2', name:'osu! "certified" sticker sets'},
    {bg:'assets/products/buttons.jpg', row:'8', column:'1', name:'osu!buttons'},
    {bg:'assets/products/name-change.jpg', row:'8', column:'2', name:'Player Name Change'},
    {bg:'assets/products/tablet.jpg', row:'9', column:'1', name:'osu!tablet'}
    ];

    return (
        <Page>
            <div className={styles.products}>
                {products.map((props) => (
                    <Product {...props}/>
                ))}
            </div>
        </Page>
    )
}

export default Home
