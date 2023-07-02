import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            product.attributes.price =
              product.oneQuantityPrice * action.payload.val;
          }
          return { ...product, [action.payload.key]: action.payload.val };
        }
        return product;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
