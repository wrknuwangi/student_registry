import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch students
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const res = await fetch("http://localhost:5000/api/students");
    const data = await res.json();
    return data;
  }
);

// Async thunk to add student
export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (student) => {
    const res = await fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    const data = await res.json();
    return data;
  }
);

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
      // Fetch students
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
      // Add student
      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default studentsSlice.reducer;
