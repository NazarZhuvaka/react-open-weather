import { FaTemperatureLow } from "react-icons/fa";
import { LuWind } from "react-icons/lu";

import getWeather from "../../api";
import style from "./CurrentWeather.module.scss";

import { Component } from "react";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
      isFetching: false,
      error: null,
    };
  }

  buildQuery = () => {
    const { selectedSpeed, selectedTempUnit } = this.props;

    const speedUnit = selectedSpeed === "M/s" ? "ms" : "kmh";
    const tempUnit = selectedTempUnit === "°F" ? "fahrenheit" : "celsius";
    return `&wind_speed_unit=${speedUnit}&temperature_unit=${tempUnit}`;
  };

  loadWeather = () => {
    this.setState({ isFetching: true });
    getWeather(this.buildQuery())
      .then((data) => this.setState({ weatherData: data }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loadWeather();
  }

  componentDidUpdate(prevProps) {
    const { selectedSpeed, selectedTempUnit } = this.props;

    if (
      prevProps.selectedSpeed !== selectedSpeed ||
      prevProps.selectedTempUnit !== selectedTempUnit
    ) {
      this.loadWeather();
    }
  }

  render() {
    const { error, isFetching, weatherData } = this.state;

    if (error) {
      return (
        <div className={style.errorContainer}>
          <h2>Error</h2>
          <p>{error.message || "Failed to load weather data"}</p>
          <button onClick={this.loadWeather}>Try Again</button>
        </div>
      );
    }

    if (isFetching) {
      return (
        <div className={style.loadingContainer}>
          <p>Loading weather data...</p>
        </div>
      );
    }

    if (!weatherData) {
      return null;
    }

    const { hourly, hourly_units } = weatherData;
    const windSpeed = hourly.wind_speed_10m[0];
    const temperature = hourly.temperature_2m[0];
    const windSpeedUnit = hourly_units.wind_speed_10m;
    const temperatureUnit = hourly_units.temperature_2m;

    return (
      <div className={style.weatherData}>
        <h1>Current Weather</h1>
        <div className={style.weatherItem}>
          <LuWind className={style.icon} />
          <span>
            {windSpeed} {windSpeedUnit}
          </span>
        </div>
        <div className={style.weatherItem}>
          <FaTemperatureLow className={style.icon} />
          <span>
            {temperature} {temperatureUnit}
          </span>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
