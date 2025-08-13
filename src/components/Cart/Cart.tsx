import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './Cart.module.css'
import Page from '../Page/Page'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../Redux/hooks.ts'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/store.ts'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Redux/slice'
import { CartItem } from '../Redux/type.ts'

function Cart() {
    const cart = useSelector((state: RootState) => state.cart)
    const { items, totalPrice } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    
    const handleIncrease = (productId: number) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecrease = (productId: number) => {
        dispatch(decreaseQuantity(productId));
    };
    
    return(
        <Page>
            <div className={styles.cart}>
                <h1>Shopping Cart</h1>
                    {items.map(item => (
                        <div className={styles.cart__item} key={item.id}>
                            {item.name}
                  <div className={styles.quantityControls}>
                    <button 
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.id)}>
                      +
                    </button>
                  </div>
                            ${totalPrice}
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                x
                            </button>
                        </div>
                    ))}
            </div>
        </Page>
    )
}

export default Cart
