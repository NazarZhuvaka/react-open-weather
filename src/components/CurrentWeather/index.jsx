import { useEffect, useState } from "react";
import getWeather from "../../api";

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
        <>
          {weatherData.elevation}
          {weatherData.hourly_units.temperature_2m}
          {weatherData.hourly_units.wind_speed_10m}
        </>
      )}
    </>
  );
}

export default CurrentWeather;
