import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "procut",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  // without Thunk
  reducers: {
    setProducts(state, action) {
      return {
        ...state,
        data: [...action.payload],
      };
    },
    setStatus(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
  // with thunk
  // extraReducers: (bundler) => {
  //     bundler
  //         .addCase(fetchProducts.pending, (state, action) => {
  //             state.status = STATUSES.LOADING
  //         })
  //         .addCase(fetchProducts.fulfilled, (state, action) => {
  //             state.data = action.payload
  //             state.status = STATUSES.IDLE
  //         })
  //         .addCase(fetchProducts.rejected, (state, action) => {
  //             state.status = STATUSES.ERROR
  //         })
  // }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// middleware without thunk
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getStatus) {
    if (getStatus().product.data.length === 0) {
      dispatch(setStatus(STATUSES.LOADING));
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        dispatch(setProducts(result));
        dispatch(setStatus(STATUSES.IDLE));
      } catch (error) {
        console.log("product error : ", error);
        dispatch(setStatus(STATUSES.ERROR));
      }
    }
  };
}

// middlewre using thunk
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const result = await res.json()
//     return result
// })
