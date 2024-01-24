import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Sintaxis SIN utilizar Prepare

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    },
  reducers: {
    addToCart: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload);
        if (existingItem) {
          existingItem.quantity += 1;
        }
    },
    decrementQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload);
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== action.payload)
        }
    },
  },
});

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice.reducer);

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = cartSlice.actions;

  export default persistedCartReducer;
