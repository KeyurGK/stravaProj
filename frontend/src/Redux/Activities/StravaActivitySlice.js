
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
  allActivities:[],
  specificActivity:[]
};

export const getAllActivities = createAsyncThunk(
  "activities/getAllActivities",
  async (_, { rejectWithValue }) => {
    const accessToken = Cookies.get("accessToken"); // read from cookies

    try {
      const response = await fetch("https://www.strava.com/api/v3/athlete/activities", {
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

export const getSpecificActivity = createAsyncThunk(
  "activities/getSpecificActivity",
  async (activityId, { rejectWithValue }) => {
    const accessToken = Cookies.get("accessToken"); // read from cookies

    try {
      const response = await fetch(`https://www.strava.com/api/v3/activities/${activityId}?include_all_efforts=true`, {
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

const StravaActivitySlice = createSlice({
  name: "stravaActivities",
  initialState,
  reducers: {}, // no need to define setAuthCode or logoutStrava here
  extraReducers: (builder) => {
    //all actvities
    builder
      .addCase(getAllActivities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.allActivities = action.payload;
      })
      .addCase(getAllActivities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
      //specific actvity
    builder
    .addCase(getSpecificActivity.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getSpecificActivity.fulfilled, (state, action) => {
      state.loading = false;
      state.specificActivity = action.payload;
    })
    .addCase(getSpecificActivity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// ❌ Don't export setAuthCode or logoutStrava here
export default StravaActivitySlice.reducer;
