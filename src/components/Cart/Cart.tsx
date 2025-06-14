import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './Cart.module.css'
import Page from '../Page/Page'

function Cart() {
    return(
        <Page>
            <div className={styles.cart__info}>
                <h1>Shopping Cart</h1>
                <p>Your cart is empty.</p>
                <p>
                    Return to the
                    <a href='https://osu.ppy.sh/store/listing'> store listing </a>
                    to find some goodies!
                </p>
            </div>
        </Page>
    )
}

export default Cart
