import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setRowHeading: (state, action) => {
      state.rowHeading = action.payload;
    },
  },
});

export const { setRowHeading } = productSlice.actions;

export default productSlice.reducer;
