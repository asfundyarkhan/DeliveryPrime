import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const updatedCart = state.items.filter((item) => item.id !== productId);
      state.items = updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
