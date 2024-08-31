#stravaProj


step 1 : get cleint id and cleint secret

client id = 111
client secret = 111


step 2 : get authorization code

on clicking a button this url must open in browser :  http://www.strava.com/oauth/authorize?client_id=111&redirect_uri=http://localhost&response_type=code&scope=activity:read_all


https://www.strava.com/oauth/authorize?client_id=100329&redirect_uri=http://localhost&response_type=code&scope=activity:read_all


Upon succesfull login, this url opens : http://localhost/?state=&code=1110&scope=read,activity:read_all  store code into a variable


next post this request : https://www.strava.com/oauth/token?client_id=100329&client_secret=111&code=1110&grant_type=authorization_code to get refresh toekn and access token in repsonse




step 4 :

https://www.strava.com/api/v3/athlete/activities?access_token=5fe0cb60f7b0974bb7de3dcb38403b121fc51132