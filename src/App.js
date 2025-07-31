import CurrentWeather from "./components/CurrentWeather";
import WeatherForm from "./components/WeatherForm";

import style from './App.module.sass'

function App() {
  return (
    <main className="main" style={style}>
      <CurrentWeather />
      <WeatherForm />
    </main>
  );
}

export default App;
