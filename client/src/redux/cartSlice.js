import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existingItem = state.cartItems.find(i => i._id === item._id)

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({...item, quantity: 1});
            }
        },
        removeCart: (state, action) => {
            const id = action.payload
            const nextCartItems = state.cartItems.filter(
                item => item._id !== id
            )
            state.cartItems = nextCartItems
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item._id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item._id === id);
            if (existingItem) {
                if (existingItem.quantity ===  1) {
                    state.cartItems = state.cartItems.filter((item => item._id !== id))
                }else {
                    existingItem.quantity -= 1
                }
            }
        },
    }
})

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer