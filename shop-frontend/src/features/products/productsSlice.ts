import {Product} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

interface ProductsState {
    items: Product[];
    fetchLoading: boolean;
}
const initialState: ProductsState = {
    items: [],
    fetchLoading: false
};
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
});