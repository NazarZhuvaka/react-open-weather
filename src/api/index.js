import CONFIGS from "../configs";

const loadWeather = async (param = '') => {
  try {
    const response = await fetch(`${CONFIGS.BASE_URL}${param}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
};

export default loadWeather;
