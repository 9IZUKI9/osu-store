import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/productTypes';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const removedItem = state.items[index];
        state.totalPrice -= removedItem.price * removedItem.quantity;
        state.items.splice(index, 1);
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
        
        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
    clearCart: () => initialState,
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity,
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;
