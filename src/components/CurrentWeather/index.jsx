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
    const tempUnit = selectedTempUnit === "*F" ? "fahrenheit" : "celsius";
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
    if (
      prevProps.selectedSpeed !== this.props.selectedSpeed ||
      prevProps.selectedTempUnit !== this.props.selectedTempUnit
    ) {
      this.loadWeather();
    }
  }

  render() {
    const { error, isFetching, weatherData } = this.state;
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
}

export default CurrentWeather;
