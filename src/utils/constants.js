import sunnyDay from "../images/day/sunny-day.png";
import cloudyDay from "../images/day/cloudy-day.png";
import fogDay from "../images/day/fog-day.png";
import rainDay from "../images/day/rain-day.png";
import snowDay from "../images/day/snow-day.png";
import stormDay from "../images/day/storm-day.png";
import sunnyNight from "../images/night/sunny-night.png";
import cloudyNight from "../images/night/cloudy-night.png";
import fogNight from "../images/night/fog-night.png";
import rainNight from "../images/night/rain-night.png";
import snowNight from "../images/night/snow-night.png";
import stormNight from "../images/night/storm-night.png";

export const latitude = 26.77136;
export const longitude = -80.243454;
export const APIkey = "771afaec0f6df78b3835fdd99865d655";

export const weatherOptions = [
  { url: sunnyDay, day: true, type: "sunny" },
  { url: cloudyDay, day: true, type: "cloudy" },
  { url: fogDay, day: true, type: "fog" },
  { url: rainDay, day: true, type: "rain" },
  { url: snowDay, day: true, type: "snow" },
  { url: stormDay, day: true, type: "storm" },
  { url: sunnyNight, day: false, type: "sunny" },
  { url: cloudyNight, day: false, type: "cloudy" },
  { url: fogNight, day: false, type: "fog" },
  { url: rainNight, day: false, type: "rain" },
  { url: snowNight, day: false, type: "snow" },
  { url: stormNight, day: false, type: "storm" },
];
