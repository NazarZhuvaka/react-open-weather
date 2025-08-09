import { FaTemperatureLow } from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import { useEffect, useState } from "react";

import getWeather from "../../api";
import style from "./CurrentWeather.module.scss";

function CurrentWeather({ selectedSpeed, selectedTempUnit }) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const buildQuery = () => {
    const speedUnit = selectedSpeed === "M/s" ? "ms" : "kmh";
    const tempUnit = selectedTempUnit === "°F" ? "fahrenheit" : "celsius";
    return `&wind_speed_unit=${speedUnit}&temperature_unit=${tempUnit}`;
  };

  const loadWeather = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getWeather(buildQuery());
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Failed to load weather data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, [selectedSpeed, selectedTempUnit]);

  if (error) {
    return (
      <div className={style.errorContainer}>
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={loadWeather}>Try Again</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={style.loadingContainer}>
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className={style.weatherData}>
      <h1>Current Weather</h1>
      <div className={style.weatherItem}>
        <LuWind className={style.icon} />
        <span>
          {weatherData.hourly.wind_speed_10m[0]}{" "}
          {weatherData.hourly_units.wind_speed_10m}
        </span>
      </div>
      <div className={style.weatherItem}>
        <FaTemperatureLow className={style.icon} />
        <span>
          {weatherData.hourly.temperature_2m[0]}{" "}
          {weatherData.hourly_units.temperature_2m}
        </span>
      </div>
    </div>
  );
}

export default CurrentWeather;
