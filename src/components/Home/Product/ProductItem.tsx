import React, { useCallback } from 'react';
import styles from './Product.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../Cart/rootState.js'
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../Cart/slice.js'
import { Product } from './ProductTypes'
import { Link } from 'react-router-dom';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const { name, bg, row, column, width = '480px', height = '200px', fontSize = '30px', page } = product
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const currentItem = cartItems.find(item => item.id === product.id);
    const quantity = currentItem?.quantity || 0;

    const handleAddToCart = useCallback((e: React.MouseEvent) => { 
        e.preventDefault();
        e.stopPropagation();
        
        if (quantity > 0) {
        dispatch(increaseQuantity(product.id));
        } else {
        dispatch(addToCart(product));
        }
    }, [])

    const handleRemoveFromCart = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (quantity === 1) {
        dispatch(removeFromCart(product.id));
        } else {
        dispatch(decreaseQuantity(product.id));
        }
  }, [])

    return (
        <Link 
            to={`${page}`}
            className={styles.product}
            style={{width, height, backgroundImage: `url(${bg})`, gridArea: `${row} / ${column}`}}
        >
            <h1 className={styles.product__name} style={{ fontSize }}>
                {name}
            </h1>

            <div className={styles.product__cost}>
                ${(product.price * quantity).toFixed(2)}
            </div>

            <div className={styles.product__buy}>
                <button
                    className={styles.product__button}
                    onClick={handleRemoveFromCart}
                >
                    - 
                </button>
                {quantity}
                <button
                    className={styles.product__button}
                    onClick={handleAddToCart}
                >
                    + 
                </button>
            </div>
        </Link>
    );
};

export default ProductItem;
