import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Register User
export const registerUser = createAsyncThunk(
  "registerUser",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/user/register`, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login User
export const loginUser = createAsyncThunk("loginUser", async (body) => {
  try {
    const { data } = await axios.post(`/api/v1/user/login`, body);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: JSON.parse(localStorage.getItem("user")) || null,
    errMsg: null,
  },
  extraReducers: (builder) => {
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
  },
});

export default userSlice.reducer;
