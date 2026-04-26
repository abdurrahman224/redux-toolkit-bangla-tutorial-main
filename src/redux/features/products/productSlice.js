import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    category: 'Category 1',
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    category: 'Category 2',
    img: 'https://via.placeholder.com/150',
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
        ...action.payload


      });
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
