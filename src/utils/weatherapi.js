import { latitude, longitude, APIkey } from "./constants";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const parseWeatherData = (data) => {
  const weather = {};
  weather.temperature = {};
  weather.temperature.F = `${Math.round(data.main.temp)}°F`;
  weather.temperature.C = `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`;
  // weather.type = getForecastWeather(parseInt(weather.temperature.F));
  return weather;
};

export const findCurrentLocation = (data) => {
  const location = data.name;
  return location;
};
