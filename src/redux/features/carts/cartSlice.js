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
    }


  }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;