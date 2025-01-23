import {createSlice, PayLoadAction} from 'reduxjs/toolkit';

const initialState = {
    items: [],
};

export const productsSlice = createSlice({
    name: 'products-cart',
    initialState,
    reducers: {
        addProduct: (state, action )  => {

            const existingProduct = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity++;
            } else { 
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        deleteProduct:(state, action ) =>{
           
            const existingProduct = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity--;
            }


        }      
    },
});