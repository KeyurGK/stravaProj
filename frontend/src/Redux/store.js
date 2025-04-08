import { configureStore } from "@reduxjs/toolkit";
import stravaAuthReducer from "./StravaAuth/StravaAuthSlice";
import stravaAthleteReducer from "./Athlete/StravaAthleteSlice"
const store = configureStore({
  reducer: {
    stravaAuth: stravaAuthReducer,
    stravaAthlete: stravaAthleteReducer
    // other reducers...
  },
});

export default store;
