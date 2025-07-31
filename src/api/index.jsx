import CONFIGS from "../configs";

function loadWeather(param) {
  return fetch(
    `${CONFIGS.BASE_URL}${param ? param : ''}`
  ).then((response) => response.json());
}

export default loadWeather;
