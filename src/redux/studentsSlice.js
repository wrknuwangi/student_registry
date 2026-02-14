import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/students";

/* =========================
   Async Thunks
   ========================= */

// GET Students
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// POST Student
export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (student) => {
    const response = await axios.post(API_URL, student);
    return response.data;
  }
);

/* =========================
   Slice
   ========================= */

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // ADD
      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default studentsSlice.reducer;
