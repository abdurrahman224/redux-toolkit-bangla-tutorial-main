import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {

    addToCart: (state, action) => {

      console.log(action.payload);
      const existingLtemIndex = state.find((item) => item.productId === action.payload.id)
      if (existingLtemIndex ) {
        alert('Item already in cart');
      } else {
        state.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
          productId: action.payload.id,
        });
      }
    },

IncreaseQuantity : (state, action) => {

  const product = state.find((item) => item.productId === action.payload);
  if (product) {
    product.quantity += 1;
  }
    },
  

    DecreaseQuantity: (state, action) => {
      const product = state.find((item) => item.productId === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

    },
    RemoveFromCart: (state, action) => {
      
      return state.find(
        product => product.productId !== action.payload,
      );
    }
  },
})

export const { addToCart, IncreaseQuantity, DecreaseQuantity, RemoveFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;