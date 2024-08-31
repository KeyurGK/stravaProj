import React, { useEffect, useState } from "react";

const Home = () => {
  const clientId = import.meta.env.VITE_API_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const redirectUri = "http://localhost:5173";
  const responseType = "code";
  const scope = "activity:read_all";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      setAuthCode(code);
      console.log("Authorization Code:", code);
      getToken(code);
    }
  }, []);

  const handleAuth = () => {
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl; // Redirect to Strava's authorization page
  };

  const getToken = async (code) => {
    console.log(clientSecret, 'client secret');
    const tokenUrl = "https://www.strava.com/oauth/token";
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: "authorization_code",
      }),
    });

    const data = await response.json();
    console.log("Access Token:", data.access_token);
    setAccessToken(data.access_token);
    getAthletes(data.access_token); // Pass the token directly to getAthletes
  };

  const getAthletes = async (token) => {
    const activitiesUrl = `https://www.strava.com/api/v3/athlete/activities?access_token=${token}`;
    const response = await fetch(activitiesUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("Final get:", data);
  };

  return (
    <div>
      <h1>Strava OAuth Demo</h1>
      <button onClick={handleAuth}>Connect with Strava</button>
      {authCode && <p>Authorization Code: {authCode}</p>}
      {accessToken && <p>Access Token: {accessToken}</p>}
    </div>
  );
};

export default Home;