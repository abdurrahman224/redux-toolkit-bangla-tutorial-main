import { configureStore } from '@reduxjs/toolkit'

import productReducer from './features/products/productSlice';
import cartSlice  from './features/carts/cartSlice'


const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice
  },
});

export default store;