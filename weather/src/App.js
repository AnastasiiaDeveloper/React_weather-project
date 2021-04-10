import React, { useEffect, useState } from "react";
import api from "./api/apiWeather";
import FormForToday from "./components/weather-pages/today-page";
import "./App.css";

const App = () => {
  const [todayData, setTodayData] = useState(false);
  // const [oneCall, setOneCall] = useState(null);
  const [call5Day, setCall5Day] = useState(false);

  const loadTestData = async () => {
    const allData = await api.CurrentWeatherData();
    setTodayData(allData.data);
    const fiveDayData = await api.Call5DayData();
    setCall5Day(fiveDayData.data);
    const lat = allData.data.coord.lat;
    const lon = allData.data.coord.lon;
    const someData = await api.OneCallAPI(lat, lon);
    console.log(someData);
  };

  useEffect(() => {
    loadTestData();
    console.log("loaded 5 day data", call5Day);
  }, []);
  return (
    <div>
      {call5Day ? (
        <FormForToday
          date={"09"}
          // temperature={Math.floor(call5DayData.main.temp - 273)}
          condition={2}
          wind={1}
          pressure={2}
          humidity={1}
        />
      ) : null}

      <button onClick={loadTestData}>get test Data</button>
    </div>
  );
};

export default App;
