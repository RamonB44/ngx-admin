
const weather = {
  "coord":
    { "lon": 72.8479, "lat": 19.0144 },
  "weather":
    [{ "id": 721, "main": "Haze", "description": "haze", "icon": "50n" }],
  "base": "stations", "main":
    { "temp": 303.14, "feels_like": 309.16, "temp_min": 303.14, "temp_max": 303.14, "pressure": 1011, "humidity": 74 },
  "visibility": 3000,
  "wind": { "speed": 2.06, "deg": 320 },
  "clouds": { "all": 13 },
  "dt": 1681154146,
  "sys": { "type": 1, "id": 9052, "country": "IN", "sunrise": 1681174485, "sunset": 1681219466 },
  "timezone": 19800, "id": 1275339, "name": "Mumbai", "cod": 200
}
module.exports = {
  weather,
};
