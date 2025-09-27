import styles from './Cart.module.css'
import Page from '../Page/Page'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/store.ts'
import { removeFromCart, increaseQuantity, decreaseQuantity } from './slice.ts'

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
                            ${(item.price * item.quantity)}
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
