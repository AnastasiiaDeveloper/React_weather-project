import "./info.css";
import { useState } from "react";

const MiniInfo = ({ time, img, temp, humidity }) => {
  return (
    <div className={"miniCardBlock"}>
      <div>
        <p className={"timeP"}>time: {time}</p>
      </div>
      <div>
        {img ? (
          <img
            className={"miniImg"}
            src={`http://openweathermap.org/img/w/${img}.png`}
          />
        ) : (
          <p> no data </p>
        )}
      </div>
      <div>
        <p className={"miniTemp"}> temp: {temp} &deg; </p>
      </div>
      <div>
        <p className={"miniHum"}>humidity: {humidity} %</p>
      </div>
    </div>
  );
};
export default MiniInfo;
