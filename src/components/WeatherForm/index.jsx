import SelectField from "./SelectField";
import style from "./WeatherForm.module.scss";
import { Component } from "react";

class WeatherForm extends Component {
  speedOptions = [
    { value: "Km/h", label: "Km/h" },
    { value: "M/s", label: "M/s" },
  ];

  tempOptions = [
    { value: "°C", label: "°C" },
    { value: "°F", label: "°F" },
  ];

  onSpeedChange = (e) => {
    this.props.onSpeedChange(e.target.value);
  };

  onTempUnitChange = (e) => {
    this.props.onTempUnitChange(e.target.value);
  };

  render() {
    const { selectedSpeed, selectedTempUnit } = this.props;

    return (
      <form className={style.weatherForm}>
        <SelectField
          label="Wind speed unit:"
          value={selectedSpeed}
          onChange={this.onSpeedChange}
          options={this.speedOptions}
        />
        <SelectField
          label="Temperature unit:"
          value={selectedTempUnit}
          onChange={this.onTempUnitChange}
          options={this.tempOptions}
        />
      </form>
    );
  }
}

export default WeatherForm;
