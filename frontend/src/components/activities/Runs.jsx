


// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
// import { FaLink } from "react-icons/fa"; // Import link icon

// const Runs = () => {
//   const [runs, setRuns] = useState([]);
//   const [selectedRun, setSelectedRun] = useState(null); // Track selected run for showing link
//   const accessToken = Cookies.get("accessToken");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!accessToken) {
//       navigate("/");
//       return;
//     }

//     const getRuns = async () => {
//       const url = `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`;
//       const response = await fetch(url, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });

//       const data = await response.json();
//       const filteredRuns = data.filter((activity) => activity.type === "Run"); // Filter only runs
//       setRuns(filteredRuns);
//     };

//     getRuns();
//   }, [accessToken, navigate]);

//   return (
//     <div className="p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6">Your Best Runs</h1>
      
//       <button
//         onClick={() => navigate("/profile")}
//         className="px-6 py-3 mb-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
//         Back to Profile
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
//         {runs.map((run) => (
//           <div key={run.id} className="p-4 bg-gray-100 shadow-md rounded relative">
//             <h2 className="font-bold text-lg">{run.name}</h2>
//             <p>🏃 Distance: {(run.distance / 1000).toFixed(2)} km</p>
//             <p>⏳ Moving Time: {(run.moving_time / 60).toFixed(2)} min</p>
//             <p>⛰️ Elevation Gain: {run.total_elevation_gain} m</p>

//             {/* Link Button */}
//             <button
//               onClick={() => setSelectedRun(run.id)}
//               className="mt-2 flex items-center text-blue-600 hover:underline">
//               <FaLink className="mr-2" /> View on Strava
//             </button>

//             {/* Show Copyable Link */}
//             {selectedRun === run.id && (
//               <div className="mt-2 p-2 bg-white border rounded shadow">
//                 <p className="text-sm break-all">{`https://www.strava.com/activities/${run.id}`}</p>
//                 <button
//                   onClick={() => navigator.clipboard.writeText(`https://www.strava.com/activities/${run.id}`)}
//                   className="mt-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
//                   Copy Link
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Runs;



import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FaLink, FaArrowLeft, FaImage } from "react-icons/fa";

const RUN_CATEGORIES = {
  "Full Marathon": 42195,
  "Half Marathon": 21097,
  "30km": 30000, 
  "15km": 15000,
  "10km": 10000,
  "5km": 5000,
 
 
 
 
};

const Runs = () => {
  const [topRuns, setTopRuns] = useState({});
  const [selectedRun, setSelectedRun] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
      return;
    }

    const fetchAllRuns = async () => {
      let allRuns = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await fetch(
          `https://www.strava.com/api/v3/athlete/activities?page=${page}&per_page=200`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const data = await response.json();
        if (data.length > 0) {
          allRuns = [...allRuns, ...data];
          page++;
        } else {
          hasMore = false;
        }
      }

      const categorizedRuns = {};
      Object.entries(RUN_CATEGORIES).forEach(([category, distance]) => {
        const bestRuns = allRuns
          .filter((run) => run.type === "Run" && run.distance >= distance - 500 && run.distance <= distance + 500)
          .sort((a, b) => a.moving_time - b.moving_time)
          .slice(0, 3);
        categorizedRuns[category] = bestRuns;
      });

      setTopRuns(categorizedRuns);
      setLoading(false);
    };

    fetchAllRuns();
  }, [accessToken, navigate]);

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
        >
          <FaArrowLeft /> Back to Profile
        </button>
        <h1 className="text-4xl font-extrabold text-purple-400 animate-fadeIn">Your Best Runs</h1>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(topRuns).map(([category, runs]) => (
            <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-xl animate-fadeInUp">
              <h2 className="text-2xl font-bold text-purple-300">{category}</h2>

              {runs.length > 0 ? (
                runs.map((run) => (
                  <div key={run.id} className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md">
                    <h3 className="font-semibold">{run.name}</h3>
                    <p>📅 Date: {formatDate(run.start_date)}</p>
                    <p>🏃 Distance: {(run.distance / 1000).toFixed(2)} km</p>
                    <p>⏱️ Time: {formatTime(run.moving_time)}</p>
                    {run.location_city && <p>📍 Location: {run.location_city}</p>}
                    
                    {/* Show Media if Available */}
                    {run.photos && run.photos.primary && run.photos.primary.urls && (
                      <div className="mt-2">
                        <img
                          src={run.photos.primary.urls["100"]}
                          alt="Run Photo"
                          className="rounded-lg shadow-md w-full"
                        />
                      </div>
                    )}

                    {/* Link Button */}
                    <button
                      onClick={() => setSelectedRun(run.id)}
                      className="mt-2 flex items-center text-blue-400 hover:text-blue-500 transition-all duration-200"
                    >
                      <FaLink className="mr-2" /> View on Strava
                    </button>

                    {/* Show Copyable Link */}
                    {selectedRun === run.id && (
                      <div className="mt-2 p-2 bg-gray-600 border rounded shadow">
                        <p className="text-sm break-all">{`https://www.strava.com/activities/${run.id}`}</p>
                        <button
                          onClick={() => navigator.clipboard.writeText(`https://www.strava.com/activities/${run.id}`)}
                          className="mt-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-all"
                        >
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 mt-2">No records found.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Runs;
