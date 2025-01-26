import { createSlice } from '@reduxjs/toolkit';


const initialState = { items: [] };

export const productsSlice = createSlice({
 
  name: 'products-cart', 
  initialState,
  reducers: {
   
    addProduct: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
       existingProduct.quantity++;
      } 
       else {
    
        state.items.push({ ...action.payload, quantity: 1 });
            }
    },

   
    deleteProduct: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct && existingProduct.quantity > 1) {
      
        existingProduct.quantity--;
      } else {
      
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});


export const selectCartQuantity = (state) => {
  return state['products-cart'].items.reduce((total, item) => total + item.quantity, 0);
};


export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
