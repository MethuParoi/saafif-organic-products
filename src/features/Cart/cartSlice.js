import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = productId
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    // increaseItemQuantity(state, action) {
    //   //payload = productId
    //   const item = state.cart.find((item) => item.productId === action.payload);
    //   if (item) {
    //     item.quantity++;
    //     item.totalPrice = Number(item.unitPrice) * Number(item.quantity);
    //   }
    // },
    // decreaseItemQuantity(state, action) {
    //   //payload = productId
    //   const item = state.cart.find((item) => item.productId === action.payload);
    //   if (item) {
    //     item.quantity--;
    //     item.totalPrice = Number(item.unitPrice) * Number(item.quantity);
    //   }

    //   if (item.quantity === 0) {
    //     state.cart = state.cart.filter(
    //       (item) => item.productId !== action.payload
    //     );
    //   }
    // },
    increaseItemQuantity(state, action) {
      //payload = productId
      state.cart = state.cart.map((item) => {
        if (item.productId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * Number(item.unitPrice),
          };
        }
        return item;
      });
    },
    decreaseItemQuantity(state, action) {
      //payload = productId
      state.cart = state.cart.map((item) => {
        if (item.productId === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * Number(item.unitPrice),
          };
        }
        return item;
      });

      state.cart = state.cart.filter((item) => item.quantity !== 0);
    },
    clearCart(state) {
      state.cart = [];
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
    console.log("unitPrice:", item.unitPrice);
    console.log("quantity:", item.quantity);
    return sum + Number(item.unitPrice) * item.quantity;
  }, 0);

// export const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce(
//     (sum, item) => sum + Number(item.unitPrice) * item.quantity,
//     0
//   );

export default cartSlice.reducer;

//reselect
