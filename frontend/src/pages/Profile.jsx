
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Profile = () => {
  const [athlete, setAthlete] = useState(null);
  const [activities, setActivities] = useState([]);
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
      return;
    }

    const fetchAthlete = async () => {
      const response = await fetch("https://www.strava.com/api/v3/athlete", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await response.json();
      console.log(data,'athelete data')
      setAthlete(data);
    };

    const fetchActivities = async () => {
      const response = await fetch("https://www.strava.com/api/v3/athlete/activities", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await response.json();
      const uniqueSports = [...new Set(data.map((activity) => activity.type))];
      setActivities(uniqueSports);
    };

    const fetchAtheletZone = async () => {
      const response = await fetch("https://www.strava.com/api/v3/activities/14092988586?include_all_efforts=true", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await response.json();
      console.log(data,'zones')
    };

    fetchAthlete();
    fetchActivities();
    fetchAtheletZone();
  }, [accessToken, navigate]);

  const handleLogout = () => {
    Cookies.remove("authCode");
    Cookies.remove("accessToken");
    setAthlete(null);  // Clear athlete state
    setActivities([]); // Clear activities state
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-8">
      {/* Header */}
      

      {/* Athlete Info */}
      {athlete && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-center gap-6 animate-fadeIn">
          <img src={athlete.profile} alt="Athlete" className="w-20 h-20 rounded-full border-4 border-purple-500" />
          <div>
            <h2 className="text-3xl font-bold">{athlete.firstname} {athlete.lastname}</h2>
            <p className="text-gray-300">{athlete.city}, {athlete.country}</p>
            <p className="text-sm text-gray-400">Total Activities: {athlete.summit ? "Pro Athlete 🌟" : "Athlete 🏅"}</p>
          </div>
        </div>
      )}

      {/* Activities Section */}
      <div className="mt-10">
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
      </div>
    </div>
  );
};

export default Profile;
