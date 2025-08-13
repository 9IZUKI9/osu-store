import React, { useCallback } from 'react';
import styles from './Product.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/rootState.js'
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../Redux/slice.js'
import { Product } from './ProductTypes'

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const { id, name, price, bg, row, column, width = '480px', height = '200px', fontSize = '30px' } = product
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

        const idToRemove = typeof product.id === 'string' ? parseInt(product.id) : product.id;
        dispatch(removeFromCart(idToRemove));

        if (quantity === 1) {
        dispatch(removeFromCart(product.id));
        } else {
        dispatch(decreaseQuantity(product.id));
        }
  }, [])


    return (
        <a
            className={styles.product}
            href="#"
            style={{
                width,
                height,
                backgroundImage: `url(${bg})`,
                gridArea: `${row} / ${column}`
            }}
        >
            <h1 className={styles.product__name} style={{ fontSize }}>
                {name}
            </h1>
            <div className={styles.product__buy}>
                <button
                    className={styles.product__button}
                    onClick={handleRemoveFromCart}>
                    - 
                </button>
                {quantity}
                <button 
                    className={styles.product__button}
                    onClick={handleAddToCart}>
                    + 
                </button>
            </div>
        </a>
    );
};

export default ProductItem;