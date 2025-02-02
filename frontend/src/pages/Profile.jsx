// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// const Profile = () => {
//   const navigate = useNavigate();
//   const accessToken = Cookies.get("accessToken");
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     if (!accessToken) {
//       navigate("/");
//     } else {
//       fetchProfile();
//     }
//   }, [accessToken, navigate]);

//   const fetchProfile = async () => {
//     const response = await fetch("https://www.strava.com/api/v3/athlete", {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//     const data = await response.json();
//     setProfile(data);
//   };

//   const handleLogout = () => {
//     Cookies.remove("authCode");
//     Cookies.remove("accessToken");
//     navigate("/");
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg text-center">
//         {profile ? (
//           <>
//             <img src={profile.profile} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400" />
//             <h1 className="text-3xl font-bold">{profile.firstname} {profile.lastname}</h1>
//             <p className="text-gray-400">{profile.city}, {profile.country}</p>

//             <div className="flex gap-4 mt-6">
//               <button
//                 onClick={() => navigate("/runs")}
//                 className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
//               >
//                 🏃 View Best Runs
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
//               >
//                 🚪 Logout
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-400">Loading profile...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
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

    fetchAthlete();
    fetchActivities();
  }, [accessToken, navigate]);

  const handleLogout = () => {
    Cookies.remove("authCode");
    Cookies.remove("accessToken");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-400 animate-fadeInLeft">KriLink</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 animate-fadeInRight"
        >
          Logout 🚪
        </button>
      </div>

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
