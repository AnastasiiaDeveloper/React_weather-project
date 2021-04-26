import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { thunkStartLoadData } from "./../../redux/actions";
import MiniInfo from "./miniInfo";
import "./info.css";

const UnderBar = ({ arrDayParts }) => {
  // console.log(arrDayParts);
  // // const arrTemp = useSelector((state) => state.arrTemp);
  // // const dispatch = useDispatch();

  // // const firstLoadThunk = () => {
  // //   dispatch(thunkStartLoadData());
  // // };

  // // useEffect(() => {
  // //   firstLoadThunk();
  // // }, []);

  // // useEffect(() => {}, [arrTemp]);
  const renderArrPartsDay = arrDayParts.map(({ partOfTheDay, twoTimes }) => {
    // console.log(partOfTheDay, twoTimes);
    return (
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          border: "1px solid #000",
          marginRight: "4px",
        }}
      >
        <p>{partOfTheDay}</p>
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
