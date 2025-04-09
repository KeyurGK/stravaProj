import { configureStore } from "@reduxjs/toolkit";
import stravaAuthReducer from "./StravaAuth/StravaAuthSlice";
import stravaAthleteReducer from "./Athlete/StravaAthleteSlice"
import stravaActivitiesReducer from "./Activities/StravaActivitySlice"
const store = configureStore({
  reducer: {
    stravaAuth: stravaAuthReducer,
    stravaAthlete: stravaAthleteReducer,
    stravaActivities : stravaActivitiesReducer
    // other reducers...
  },
});

export default store;
