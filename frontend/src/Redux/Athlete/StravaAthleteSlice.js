// src/redux/stravaAuthSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const clientId = import.meta.env.VITE_API_CLIENT_ID;
const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
const redirectUri = "http://localhost:5173"; // or your production URI

const initialState = {
  accessToken: Cookies.get("accessToken") || null,
  authCode: Cookies.get("authCode") || null,
  loading: false,
  error: null,
  athleteData:[]
};

export const getAthleteDetails = createAsyncThunk(
  "athlete/getAthleteDetails",
  async (_, { rejectWithValue }) => {
    const accessToken = Cookies.get("accessToken"); // read from cookies

    try {
      const response = await fetch("https://www.strava.com/api/v3/athlete", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const StravaAthleteSlice = createSlice({
  name: "stravaAthlete",
  initialState,
  reducers: {}, // no need to define setAuthCode or logoutStrava here
  extraReducers: (builder) => {
    builder
      .addCase(getAthleteDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAthleteDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.athleteData = action.payload;
      })
      .addCase(getAthleteDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ❌ Don't export setAuthCode or logoutStrava here
export default StravaAthleteSlice.reducer;
