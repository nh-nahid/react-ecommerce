import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action){
            const product = state.find(
                (product) => product.id === action.payload.id
            );

            product ? product.quantity++ : state.push({...action.payload, quantity: 1});
        },
        removeItemFromCart(state, action) {
            return state.filter((product) => product.id !== action.payload.id)
        },
        modifyQuantityOfAnItem() {},
        clearCart() {}
    }
})