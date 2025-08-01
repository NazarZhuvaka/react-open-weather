import SelectField from "./SelectField";
import style from "./WeatherForm.module.scss";

import { Component } from "react";

class WeatherForm extends Component {
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
          options={[
            { value: "Km/h", label: "Km/h" },
            { value: "M/s", label: "M/s" },
          ]}
        />
        <SelectField
          label="Temperature unit:"
          value={selectedTempUnit}
          onChange={this.onTempUnitChange}
          options={[
            { value: "*C", label: "*C" },
            { value: "*F", label: "*F" },
          ]}
        />
      </form>
    );
  }
}

export default WeatherForm