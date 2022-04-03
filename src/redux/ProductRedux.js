import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //  GET ALL
    getproductStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getproductSucess: (state, action) => {
      state.isFetching = false
      state.products = action.payload
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;

    },
    //  DELETE
    deleteproductStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    deleteproductSucess: (state, action) => {
      state.isFetching = false
      state.products.splice(
        state.products.findIndex(item=>item._id === action.payload),

      )
    },
    deleteProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;

    },
      //  UPDATE
      updateproductStart: (state) => {
        state.isFetching = true
        state.error = false
      },
      updateproductSucess: (state, action) => {
        state.isFetching = false
        state.products[
          state.products.findIndex((item)=> item._id === action.payload.id)
        ] = action.payload.product;
        
      },
      updateProductsFailure: (state) => {
        state.isFetching = false;
        state.error = true;
  
      },
       //  ADD
       addproductStart: (state) => {
        state.isFetching = true
        state.error = false
      },
      addproductSucess: (state, action) => {
        state.isFetching = false
        state.products.push(action.payload)
        
        
      },
      addProductsFailure: (state) => {
        state.isFetching = false;
        state.error = true;
  
      },
  },
});

export const { getproductStart, getproductSucess, getProductsFailure,deleteproductStart,deleteproductSucess,deleteProductsFailure,
updateproductStart,updateproductSucess,updateProductsFailure,addproductStart,addproductSucess,addProductsFailure } = productSlice.actions;

export default productSlice.reducer