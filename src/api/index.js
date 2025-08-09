import CONFIGS from "../configs";

const loadWeather = async (param = '') => {
  const response = await fetch(`${CONFIGS.BASE_URL}${param}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

export default loadWeather;
