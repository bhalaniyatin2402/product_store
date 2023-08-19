import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
    },
    remove(state, action) {
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    increaseItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      if (item) {
        if (item.quantity < 10) {
          item.quantity++;
        }
      }
    },
    decreaseItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      }
    },
    cartTotal(state, action) {
      let totalQty = 0;
      let totalPr = 0;
      state.items.map((item) => {
        totalQty += item.quantity;
        totalPr += item.price * item.quantity;
      });
      state.totalQuantity = totalQty;
      state.totalPrice = totalPr;
    },
  },
});

export const {
  add,
  remove,
  increaseItemQuantity,
  decreaseItemQuantity,
  cartTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
