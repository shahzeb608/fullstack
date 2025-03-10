import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../pages/Cart/cartSlice";
import productReducer from "../pages/Products/productSlice";
import authReducer from "../pages/Auth/authSlice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    auth: authReducer, 
  },
});
