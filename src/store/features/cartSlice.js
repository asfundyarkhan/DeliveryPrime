import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price + action.payload.quantity;
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
