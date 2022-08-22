import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  isAdmin: false,
  user: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    adminLogin(state, action) {
      state.isAdmin = action.payload;
    },
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action) {
      const productId = action.payload.id;
      const updatedCart = state.items.filter((item) => item.id !== productId);
      state.items = updatedCart;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart, adminLogin, addUser } =
  cartSlice.actions;
export default cartSlice.reducer;
