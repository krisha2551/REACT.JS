import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      // console.log("product data", [...state.products]);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (prod) => prod.id !== action.payload
      );
    },
  },
});

export const { addProduct,deleteProduct } = product.actions;

export default product.reducer;
