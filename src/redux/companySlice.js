import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://673736a9aafa2ef222330e54.mockapi.io/company";

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const fetchCompanyDetails = createAsyncThunk(
  "companies/fetchCompanyDetails",
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
);

const companySlice = createSlice({
  name: "companies",
  initialState: {
    companyList: [],
    details: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companyList = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCompanyDetails.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  },
});

export default companySlice.reducer;
