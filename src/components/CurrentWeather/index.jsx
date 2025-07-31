import { FaTemperatureLow } from "react-icons/fa";
import { LuWind } from "react-icons/lu";

import { useEffect, useState } from "react";

import getWeather from "../../api";
import style from "./CurrentWeather.module.scss";

function CurrentWeather({ selectedSpeed, selectedTempUnit }) {
  const [weatherData, setWeatherData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const buildQuery = () => {
    const speedUnit = selectedSpeed === "M/s" ? "ms" : "kmh";
    const tempUnit = selectedTempUnit === "*F" ? "fahrenheit" : "celsius";
    return `&wind_speed_unit=${speedUnit}&temperature_unit=${tempUnit}`;
  };

  const loadWeather = () => {
    setIsFetching(true);
    getWeather(buildQuery())
      .then((data) => setWeatherData(data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadWeather();
  }, [selectedSpeed, selectedTempUnit]);

  return (
    <>
      {error && <div>ERROR {JSON.stringify(error)}</div>}
      {isFetching && <div>Loading, please wait ..</div>}
      {!error && !isFetching && weatherData && (
        <div className={style.weatherData}>
          <h1>Current Weather</h1>
          <div>
            <LuWind /> {weatherData.hourly.wind_speed_10m[0]}{" "}
            {weatherData.hourly_units.wind_speed_10m}
          </div>
          <div>
            <FaTemperatureLow /> {weatherData.hourly.temperature_2m[0]}{" "}
            {weatherData.hourly_units.temperature_2m}
          </div>
        </div>
      )}
    </>
  );
}

export default CurrentWeather;
