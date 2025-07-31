import { useState } from "react";

import styles from "./App.module.scss";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [selectedSpeed, setSelectedSpeed] = useState("Km/h");
  const [selectedTempUnit, setSelectedTempUnit] = useState("*C");

  return (
    <main className={styles.main}>
      <WeatherForm
        selectedSpeed={selectedSpeed}
        selectedTempUnit={selectedTempUnit}
        onSpeedChange={setSelectedSpeed}
        onTempUnitChange={setSelectedTempUnit}
      />
      <CurrentWeather
        selectedSpeed={selectedSpeed}
        selectedTempUnit={selectedTempUnit}
      />
    </main>
  );
}

export default App;
