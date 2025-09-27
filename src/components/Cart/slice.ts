import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from './type.ts'

const initialState: CartState = {
    items: [],
    totalPrice: 0,
    totalItems: 0
};

function updateTotals(state: CartState) {
    state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            updateTotals(state);
        },

        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },

        removeFromCart: (state, action: PayloadAction<string | number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            updateTotals(state);
        },

        increaseQuantity: (state, action: PayloadAction<string | number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalPrice += item.price;
                state.totalItems += 1;
            }
        },

        decreaseQuantity: (state, action: PayloadAction<string | number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                state.totalPrice -= item.price;
                state.totalItems -= 1;
                if (item.quantity === 0) {
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalItems = 0;
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
