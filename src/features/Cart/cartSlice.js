import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      const newItem = action.payload;
      if (
        typeof newItem.unitPrice !== "number" ||
        typeof newItem.quantity !== "number"
      ) {
        console.error(
          `Invalid unitPrice or quantity for item with id ${newItem.productId}: unitPrice = ${newItem.unitPrice}, quantity = ${newItem.quantity}`
        );
      } else {
        newItem.totalPrice = newItem.unitPrice * newItem.quantity; // calculate totalPrice here
        state.cart.push(newItem);
      }
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteItem(state, action) {
      //payload = productId
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseItemQuantity(state, action) {
      //payload = productId
      const item = state.cart.find((item) => item.productId === action.payload);
      if (
        item &&
        typeof item.unitPrice === "number" &&
        typeof item.quantity === "number"
      ) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
        console.log("itotalPrice:", item.totalPrice);
      }
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseItemQuantity(state, action) {
      //payload = productId
      const item = state.cart.find((item) => item.productId === action.payload);
      if (
        item &&
        typeof item.unitPrice === "number" &&
        typeof item.quantity === "number"
      ) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity;
        console.log("dtotalPrice:", item.totalPrice);
      }

      if (item.quantity === 0) {
        state.cart = state.cart.filter(
          (item) => item.productId !== action.payload
        );
      }
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearCart(state) {
      state.cart = [];
      // Clear localStorage
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQunatity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.productId === id)?.quantity || 0;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => {
    if (typeof item.totalPrice === "number") {
      return sum + item.totalPrice;
    } else {
      console.error(
        `Invalid totalPrice for item with id ${item.productId}: ${item.totalPrice}`
      );
      return sum;
    }
  }, 0);

export default cartSlice.reducer;


