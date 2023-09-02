import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `http://localhost:5000`;

// Register User
export const registerUser = createAsyncThunk(
  "registerUser",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/v1/user/register`,
        body
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "loginUser",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/v1/user/login`, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: JSON.parse(localStorage.getItem("user")) || null,
    errMsg: null,
  },
  reducers: {
    logoutUser: (state, action) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // Register Reducer
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.errMsg = action.payload;
    });

    // Login Reducer
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errMsg = action.payload;
    });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
