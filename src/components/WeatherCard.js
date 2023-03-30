const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOptions = [
    {
      url: require("../images/day/sunny-day.png").default,
      day: true,
      type: "sunny",
    },
    {
      url: require("../images/day/cloudy-day.png").default,
      day: true,
      type: "cloudy",
    },
    {
      url: require("../images/day/fog-day.png").default,
      day: true,
      type: "fog",
    },
    {
      url: require("../images/day/rain-day.png").default,
      day: true,
      type: "rain",
    },
    {
      url: require("../images/day/snow-day.png").default,
      day: true,
      type: "snow",
    },
    {
      url: require("../images/day/storm-day.png").default,
      day: true,
      type: "storm",
    },
    {
      url: require("../images/night/sunny-night.png").default,
      day: false,
      type: "sunny",
    },
    {
      url: require("../images/night/cloudy-night.png").default,
      day: false,
      type: "cloudy",
    },
    {
      url: require("../images/night/fog-night.png").default,
      day: false,
      type: "fog",
    },
    {
      url: require("../images/night/rain-night.png").default,
      day: false,
      type: "rain",
    },
    {
      url: require("../images/night/snow-night.png").default,
      day: false,
      type: "snow",
    },
    {
      url: require("../images/night/storm-night.png").default,
      day: false,
      type: "storm",
    },
  ];

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <div className="weathercard__container">
      <p className="weathercard__info">{weatherTemp}°F</p>
      <img src={imageSrcUrl} className="weathercard__image" />
    </div>
  );
};

export default WeatherCard;
