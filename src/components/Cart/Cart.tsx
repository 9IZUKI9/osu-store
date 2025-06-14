import React from 'react'
import ReactDOM from 'react-dom/client'
import '../Styles/Store.css'
import '../Styles/Cart.css'

function Cart() {
    return(
        <div className='osu-page'>
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

            <nav className='store-nav'>
                <ul>
                    <li className='store-nav__item'>
                        <a className='store-nav__link' href='#'>products</a>
                    </li>

                    <li className='store-nav__item'>
                        <a className='store-nav__link' href='#'>cart</a>
                    </li>

                    <li className='store-nav__item'>
                        <a className='store-nav__link' href='#'>order history</a>
                    </li>
                </ul>
            </nav>

            <div className='cart__info'>
                <h1>Shopping Cart</h1>
                <p>Your cart is empty.</p>
                <p>
                    Return to the
                    <a href='https://osu.ppy.sh/store/listing'> store listing </a>
                    to find some goodies!
                </p>
            </div>
        </div>
    )
}

export default Cart