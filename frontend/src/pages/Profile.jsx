
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getAthleteDetails } from "../Redux/Athlete/StravaAthleteSlice";

const Profile = () => {
  const [athlete, setAthlete] = useState(null);
  const [activities, setActivities] = useState([]);
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();
const dispatch = useDispatch();




  useEffect(()=>{
    dispatch(getAthleteDetails());
  },[])

  const {athleteData} = useSelector((state)=>state.stravaAthlete);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-8">
      {/* Header */}
      

      {/* Athlete Info */}
      {athleteData && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-center gap-6 animate-fadeIn">
          <img src={athleteData.profile} alt="Athlete" className="w-20 h-20 rounded-full border-4 border-purple-500" />
          <div>
            <h2 className="text-3xl font-bold">{athleteData.firstname} {athleteData.lastname}</h2>
            <p className="text-gray-300">{athleteData.city}, {athleteData.state}</p>
            <p className="text-sm text-gray-400">{athleteData.bio}</p>
          </div>
        </div>
      )}

      {/* Activities Section */}
      {/* <div className="mt-10">
        <h2 className="text-2xl font-semibold text-purple-400 animate-fadeInUp">Your Activities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <div
                key={index}
                onClick={() => navigate(`/activities/${activity.toLowerCase()}`)}
                className="p-6 bg-gray-700 hover:bg-purple-500 transition-all duration-300 cursor-pointer text-center rounded-lg shadow-lg animate-fadeInUp"
              >
                <h3 className="text-xl font-bold">{activity}</h3>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No activities found.</p>
          )}
        </div>
      </div> */}

      <div>
        <h2 onClick={()=>navigate("/master-runs")}>Master runs</h2> 
        <h2 onClick={()=>navigate("/personal-best")}>Personal</h2>

      </div>
    </div>
  );
};

export default Profile;
