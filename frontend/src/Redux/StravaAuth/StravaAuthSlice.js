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
  isAuthenticated:false,
};

export const getStravaToken = createAsyncThunk(
  "strava/getToken",
  async (code, { rejectWithValue }) => {
    try {
      const response = await fetch("https://www.strava.com/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
          grant_type: "authorization_code",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      Cookies.set("accessToken", data.access_token, { expires: 1 });
      return data.access_token;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const StravaAuthSlice = createSlice({
  name: "stravaAuth",
  initialState,
  reducers: {
    setAuthCode: (state, action) => {
      state.authCode = action.payload;
      Cookies.set("authCode", action.payload, { expires: 1 });
    },
    logoutStrava: (state) => {
      state.authCode = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      Cookies.remove("authCode");
      Cookies.remove("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStravaToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStravaToken.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getStravaToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setAuthCode, logoutStrava } = StravaAuthSlice.actions;
export default StravaAuthSlice.reducer;
