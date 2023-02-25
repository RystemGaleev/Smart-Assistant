import axios from 'axios';

export const getWeatherData = async (city: string, units = 'metric') => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_WEATHER_API_BASE_URL + `q=${city}&?units=${units}&APPID=${import.meta.env.VITE_WEATHER_API}`,
    );
    return data;
  } catch (error) {
    let errorMessage = 'Failed to make a request';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
  }
};
