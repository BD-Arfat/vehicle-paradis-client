import { getProducts } from "./ProductApi";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchproducts = createAsyncThunk("products/fetchproducts", async ({tags, search}) => {
    const products = await getProducts(tags, search);
    return products;
});

const productslice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchproducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchproducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchproducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default productslice.reducer;
