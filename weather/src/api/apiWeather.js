import axios from "axios";
const key = "f553d313edd0d50254f7ee1ba1440fe5";
const defaultNameCity = "Kyiv";
const ApiWeather = async (city = defaultNameCity) => {
  try {
    const dataCall5Day = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
    );
    const coord = await dataCall5Day.data.city.coord;
    const dataOneCall = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude={part}&appid=${key}`
    );
    return {
      fiveDaysData: dataCall5Day.data,
      oneCallData: dataOneCall.data,
    };
  } catch (err) {
    return {
      fiveDaysData: 404,
      oneCallData: 404,
    };
  }
};

export default ApiWeather;
