import axios from "axios";
const key = "f553d313edd0d50254f7ee1ba1440fe5";
class ApiWeather {
  CurrentWeatherData = async (city) => {
    const dataToday = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${"Kyiv"}&appid=${key}`
    );
    return dataToday;
  };
  OneCallAPI = async (lat, lon) => {
    const dataOneCall = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}`
    );
    return dataOneCall.data;
  };

  Call5DayData = async (city) => {
    const dataCall5Day = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${"Kyiv"}&appid=${key}`
    );
    return dataCall5Day;
  };
 
}


export default new ApiWeather();
