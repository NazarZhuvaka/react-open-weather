import styles from "./App.module.scss";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForm from "./components/WeatherForm";

import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSpeed: "Km/h",
      selectedTempUnit: "*C",
    };
  }

  handleSpeedChange = (selectedSpeed) => {
    this.setState({ selectedSpeed });
  };

  handleTempUnitChange = (selectedTempUnit) => {
    this.setState({ selectedTempUnit });
  };

  render() {
    return (
      <main className={styles.main}>
        <WeatherForm
          selectedSpeed={this.state.selectedSpeed}
          selectedTempUnit={this.state.selectedTempUnit}
          onSpeedChange={this.handleSpeedChange}
          onTempUnitChange={this.handleTempUnitChange}
        />
        <CurrentWeather
          selectedSpeed={this.state.selectedSpeed}
          selectedTempUnit={this.state.selectedTempUnit}
        />
      </main>
    );
  }
}

export default App;
