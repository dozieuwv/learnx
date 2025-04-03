// redux/apiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../../utils/apiRequest"; // Import the utility fetch function
import store from "../store";

// Async Thunk for fetching data
const endpoint = 'course/CourseForTrack'
export const fetchCourse = createAsyncThunk("getCourse/fetchData", async ( ) => {
  try {
    // const token = getState().auth.token; // Retrieve token from Redux state
    const state = store.getState()
    const token = state.auth.token
    // const { token } = useSelector((state) => state.auth);
    console.log(token);
    
    const response = await apiRequest(endpoint, "GET", null, token);
    return response; // If successful, return the data
  } catch (error) {
    // return rejectWithValue(error.message); // Handle errors properly
    console.log(error);
    
  }
});

// Slice for handling API state
const getCourseSlice = createSlice({
  name: "getCourse",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {}, // No direct reducers, only async thunks will be used
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getCourseSlice.reducer;
