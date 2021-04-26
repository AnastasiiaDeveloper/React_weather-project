import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { thunkStartLoadData } from "./../../redux/actions";
import MiniInfo from "./miniInfo";
import "./info.css";

const UnderBar = ({ arrDayParts }) => {

  const renderArrPartsDay = arrDayParts.map(({ partOfTheDay, twoTimes }) => {
   
    return (
      <div
        style={{
          backgroundColor: "#87CEFA",
          borderRadius: "15px",
          border: "1px solid #fff",
          marginRight: "4px",
          height: "100%"
        }}
      >
        <p className={"parts"}>{partOfTheDay}</p>
        {twoTimes.map(({ time, img, temp, humidity }) => {
          return (
            <MiniInfo time={time} img={img} temp={temp} humidity={humidity} />
          );
        })}
      </div>
    );
  });
  return <div className={"positionUnderCard"}>{renderArrPartsDay}</div>;
};
export default UnderBar;
