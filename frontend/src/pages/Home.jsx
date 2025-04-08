// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import navigation
// import Cookies from "js-cookie";
// import "animate.css"; // Import Animate.css

// const Home = () => {
//   const clientId = import.meta.env.VITE_API_CLIENT_ID;
//   const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
//   const navigate = useNavigate();

//   const [authCode, setAuthCode] = useState(Cookies.get("authCode") || null);
//   const [accessToken, setAccessToken] = useState(Cookies.get("accessToken") || null);

//   const redirectUri = "http://localhost:5173";
//   // const redirectUri = "https://kri-link.vercel.app/";
//   const responseType = "code";
//   const scope = "activity:read_all";

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get("code");
//     if (code && !authCode) {
//       setAuthCode(code);
//       Cookies.set("authCode", code, { expires: 1 });
//       getToken(code);
//     }
//   }, []);

//   useEffect(() => {
//     // Navigate to Profile if the user is authenticated
//     if (accessToken) {
//       navigate("/profile");
//     }
//   }, [accessToken, navigate]);

//   const handleAuth = () => {
//     const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
//     window.location.href = authUrl;
//   };

//   const getToken = async (code) => {
//     const tokenUrl = "https://www.strava.com/oauth/token";
//     const response = await fetch(tokenUrl, {
//       method: "POST", 
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         client_id: clientId,
//         client_secret: clientSecret,
//         code: code,
//         grant_type: "authorization_code",
//       }),
//     });

//     const data = await response.json();
//     setAccessToken(data.access_token);
//     Cookies.set("accessToken", data.access_token, { expires: 1 });
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white p-6">
//       <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg text-center relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 rounded-xl animate-pulse"></div>

//         <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeInDown animate__delay-1s">
//           Unlock Your Best Efforts with KriLink 🚀
//         </h1>
//         <p className="text-lg text-gray-800 mb-6 animate__animated animate__fadeInUp animate__delay-2s">
//           KriLink is your <b>personal vault</b> for storing and sharing your top performances across every sport. 
//           Showcase your best efforts with just one click and shine brighter in the athlete community!
//         </p>

//         <p className="text-lg text-gray-800 mb-8 animate__animated animate__fadeInUp animate__delay-3s">
//           Connect your Strava account and let KriLink hold the key to your best performances – 
//           Whether it’s running 🏃‍♂️, cycling 🚴, or swimming 🏊‍♀️, KriLink has got your back.
//         </p>

//         {!accessToken ? (
//           <button
//             onClick={handleAuth}
//             className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-lg font-semibold text-white rounded-full shadow-xl hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 animate__animated animate__pulse animate__delay-4s"
//           >
//             🔗 Connect with Strava
//           </button>
//         ) : null} {/* This button disappears since the user will be redirected */}
//       </div>
//     </div>
//   );
// };

// export default Home;

// src/App.jsx
// src/App.jsx
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     fetch("https://workwithus.lucioai.com/access-check", {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2V5dXIgRyBLdWxrYXJuaSIsImVtYWlsIjoia3Vsa2FybmlrZXl1ci5nQGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA0LTA3IDExOjE1OjIwIn0.0aW_oVhtVXqngwFaoySocaMQxlAd7sgtdPyVR2mp00Q",
//         "Origin": "https://lucioai.com",
//         "Referer": "https://lucioai.com/",
//       },
//       body: JSON.stringify({ name: "mr_robot" })
//     })
//       .then((res) => res.json())
//       .then(console.log)
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold">LucioAI Auth Test</h1>
//         <p className="mt-4 text-gray-400">Sending request to the bouncer...</p>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getStravaToken,
  setAuthCode,
} from "../Redux/StravaAuth/StravaAuthSlice"; // Adjust path as needed
import Cookies from "js-cookie";
import "animate.css"; // Import Animate.css

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accessToken, authCode } = useSelector((state) => state.stravaAuth);

  const clientId = import.meta.env.VITE_API_CLIENT_ID;
  const redirectUri = "http://localhost:5173";
  const responseType = "code";
  const scope = "activity:read_all";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code && !authCode) {
      dispatch(setAuthCode(code));
      dispatch(getStravaToken(code));
    }
  }, [dispatch, authCode]);

  useEffect(() => {
    if (accessToken) {
      navigate("/profile");
    }
  }, [accessToken, navigate]);

  const handleAuth = () => {
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl;
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 rounded-xl animate-pulse"></div>

        <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeInDown animate__delay-1s">
          Unlock Your Best Efforts with KriLink 🚀
        </h1>
        <p className="text-lg text-gray-800 mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          KriLink is your <b>personal vault</b> for storing and sharing your top performances across every sport. 
          Showcase your best efforts with just one click and shine brighter in the athlete community!
        </p>
        <p className="text-lg text-gray-800 mb-8 animate__animated animate__fadeInUp animate__delay-3s">
          Connect your Strava account and let KriLink hold the key to your best performances – 
          Whether it’s running 🏃‍♂️, cycling 🚴, or swimming 🏊‍♀️, KriLink has got your back.
        </p>

        {!accessToken && (
          <button
            onClick={handleAuth}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-lg font-semibold text-white rounded-full shadow-xl hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 animate__animated animate__pulse animate__delay-4s"
          >
            🔗 Connect with Strava
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
