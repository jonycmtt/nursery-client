import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  product: {
    search?: string;
  };

  // searchProduct: Record<string, unknown>;
}

const initialState: ProductState = {
  product: {},
  // searchProduct: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchInput: (state, action: PayloadAction<{ search: string }>) => {
      state.product = action.payload;
    },
    // searchProduct: (state, action) => {
    //   state.searchProduct.push();
    // },
  },
});

export const { searchInput } = productSlice.actions;
export default productSlice.reducer;
