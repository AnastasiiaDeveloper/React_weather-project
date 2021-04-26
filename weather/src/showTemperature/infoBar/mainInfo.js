import { useEffect, useState } from "react";
import UnderBar from "./underBar";
import "./info.css";

const MainInfo = ({
  dayNum,
  monthNum,
  yearNum,
  img,
  todayTemp,
  likeTemp,
  speedWind,
  humidity,
  pressure,
  tempArr,
}) => {
  console.log(tempArr);
  const [todayT, setTodayT] = useState("");
  const [fLike, setFLike] = useState("");

  useEffect(() => {
    if (todayTemp > 0) {
      setTodayT("+");
    } else if (todayTemp < 1) {
      setTodayT("");
    }
    if (likeTemp > 0) {
      setFLike("+");
    } else if (likeTemp < 1) {
      setFLike("");
    }
  }, []);

  return (
    <div className={"underBlock"}>
      <div className={"cardBlock2"}>
        <div className={"selectedDate"}>
          <p className={"num"}>{dayNum}</p>
          <p className={"month"}>0{monthNum}</p>
          <p>20{yearNum}</p>
        </div>
        <div>
          <img
            className={"img"}
            src={`http://openweathermap.org/img/w/${img}.png`}
          />
        </div>
        <div>
          <p className={"tempToday"}>
            {" "}
            temp: {todayT}
            {todayTemp} &deg;
          </p>
        </div>

        <div>
          <p>
            {" "}
            feels like: {fLike}
            {likeTemp} &deg;{" "}
          </p>
        </div>
        <div>
          <p>wind-speed: {speedWind} m/s</p>
        </div>
        <div>
          <p>humidity: {humidity} %</p>
        </div>
        <div>
          <p>pressure: {pressure} hPa</p>
        </div>
      </div>
      {/* передай сюда массив в underBar */}
      <UnderBar arrDayParts={tempArr} />
    </div>
  );
};
export default MainInfo;
