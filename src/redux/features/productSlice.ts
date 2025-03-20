import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/product";
import { productRes } from "../../types/productRes";

const API_URL = "http://localhost:5000/api/products"; // Thay thế bằng API thực tế

// Action async để lấy danh sách sản phẩm
export const getProducts = createAsyncThunk<Product[]>(
  "product/getProducts",
  async () => {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
  }
);

export const getProductsRes = createAsyncThunk<productRes>(
  "product/getProducts",
  async () => {
    const response = await axios.get<productRes>(API_URL);
    return response.data;
  }
);

interface ProductState {
  listProducts: Product[];
  loading: boolean;
  error: string | null;
}

// Khởi tạo state ban đầu
const initialState: ProductState = {
  listProducts: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsRes.fulfilled, (state, action) => {
        state.listProducts = action.payload.data;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch products";
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
