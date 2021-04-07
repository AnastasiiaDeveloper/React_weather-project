import axios from "axios";

axios.defaults.baseURL = "";

export const getWeather = async () => {
  try {
    const data = await axios.get(
      ``
    );
    return data.data.results.map(() => ({
      
    }));
  } catch (err) {
    throw err;
  }
};



export const searchCity = async (string) => {
    try {
      const data = await axios.get(
        `&query=${string}`
      );
      return data.data.results;
    } catch (err) {
      throw err;
    }
  };