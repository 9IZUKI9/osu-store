import '../Styles/OsuStore.css'
import { useState } from 'react'
import StoreProduct from './StoreProduct.tsx'
import NavBar from './NavBar.tsx';

function Store() {

    const products = [
        {bg:"assets/products/supporter.jpg", row:'1', column:'1/2', width:'970px', height:'300px', name: 'osu!supporter tag', fontSize: '40px'},
        {bg:"assets/products/deskmats.jpg", row:'2', column:'1/2', width:'970px', height:'300px', name: 'osu! deskmats', fontSize: '40px'},
        {bg:"assets/products/keycaps", row:'3', column:'1', name: 'osu! keycaps'},
        {bg:"assets/products/socks", row:'3', column:'2', name: 'osu! socks'},
        {bg:"assets/products/tubes", row:'4', column:'1', name: 'osu! neck tubes/gaiters'},
        {bg:"assets/products/keychain", row:'4', column:'2', name: 'osu! keychain/lanyard set'},
        {bg:"assets/products/pippi", row:'5', column:'1', name: "let's play with pippi!"},
        {bg:"assets/products/yuzu", row:'5', column:'2', name: "let's play with yuzu!"},
        {bg:"assets/products/mocha", row:'6', column:'1', name: "let's play with mocha!"},
        {bg:"assets/products/slider", row:'6', column:'2', name: 'osu! "slider" t-shirt'},
        {bg:"assets/products/lanyard", row:'7', column:'1', name: 'osu! lanyard (slider)'},
        {bg:"assets/products/stickers", row:'7', column:'2', name: 'osu! "certified" sticker sets'},
        {bg:"assets/products/buttons", row:'8', column:'1', name: 'osu!buttons'},
        {bg:"assets/products/name-change", row:'8', column:'2', name: 'Player Name Change'},
        {bg:"assets/products/tablet", row:'9', column:'1', name: 'osu!tablet'}
    ];

    return (
        <div className='store' style={{width: 1000}}>
            <header>
                <div className='header-content'>
                    <div className='header-content__title'>
                        <h2>store</h2>
                    </div>
            
                    <div className='header-content__distributor'>
                        <div className='header-content__text'>
                            Xsolla is an authorised global distributor of osu!
                        </div>
                    </div>
                </div>
                
            </header>

            <NavBar />

            <div className='osu-page'>
                <div className="store-products">
                    {products.map((props) => (
                        <StoreProduct {...props}/>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Store