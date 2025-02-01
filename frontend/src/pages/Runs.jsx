


import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FaLink } from "react-icons/fa"; // Import link icon

const Runs = () => {
  const [runs, setRuns] = useState([]);
  const [selectedRun, setSelectedRun] = useState(null); // Track selected run for showing link
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
      return;
    }

    const getRuns = async () => {
      const url = `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      const filteredRuns = data.filter((activity) => activity.type === "Run"); // Filter only runs
      setRuns(filteredRuns);
    };

    getRuns();
  }, [accessToken, navigate]);

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Your Best Runs</h1>
      
      <button 
        onClick={() => navigate("/")} 
        className="px-6 py-3 mb-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Back to Home
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {runs.map((run) => (
          <div key={run.id} className="p-4 bg-gray-100 shadow-md rounded relative">
            <h2 className="font-bold text-lg">{run.name}</h2>
            <p>🏃 Distance: {(run.distance / 1000).toFixed(2)} km</p>
            <p>⏳ Moving Time: {(run.moving_time / 60).toFixed(2)} min</p>
            <p>⛰️ Elevation Gain: {run.total_elevation_gain} m</p>

            {/* Link Button */}
            <button 
              onClick={() => setSelectedRun(run.id)} 
              className="mt-2 flex items-center text-blue-600 hover:underline">
              <FaLink className="mr-2" /> View on Strava
            </button>

            {/* Show Copyable Link */}
            {selectedRun === run.id && (
              <div className="mt-2 p-2 bg-white border rounded shadow">
                <p className="text-sm break-all">{`https://www.strava.com/activities/${run.id}`}</p>
                <button 
                  onClick={() => navigator.clipboard.writeText(`https://www.strava.com/activities/${run.id}`)}
                  className="mt-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Copy Link
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Runs;
