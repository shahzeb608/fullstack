import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const storedUserInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const storedExplicitLogin = localStorage.getItem("explicitLogin") === "true";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:8000/api/users/login", { email, password });
      
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("explicitLogin", "true");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password, phone }, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:8000/api/users/register", { name, email, password, phone });
      
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("explicitLogin", "true");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Signup failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: storedUserInfo,
    loading: false,
    error: null,
    explicitLogin: storedUserInfo ? storedExplicitLogin : false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("explicitLogin");
      state.userInfo = null;
      state.explicitLogin = false;
    },
    setExplicitLogin: (state, action) => {
      state.explicitLogin = action.payload;
      localStorage.setItem("explicitLogin", action.payload ? "true" : "false");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.explicitLogin = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.explicitLogin = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setExplicitLogin } = authSlice.actions;
export default authSlice.reducer;
