import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../helper/BaseURL";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/popular?${API_KEY}`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    errMsg: null,
    data: null,
    favMovie: JSON.parse(localStorage.getItem("favMovies")) || [],
  },
  reducers: {
    postFavMovie: (state, action) => {
      const movie = action.payload;
      const movieId = movie.id;
      const isMovieInFav = state.favMovie.some(
        (favMovie) => favMovie.id === movieId
      );

      if (!isMovieInFav) {
        state.favMovie.push(movie);

        // Update local storage with the updated favMovie array
        localStorage.setItem("favMovies", JSON.stringify(state.favMovie));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.errMsg = action.payload;
    });
  },
});

export const { postFavMovie } = movieSlice.actions;
export default movieSlice.reducer;
