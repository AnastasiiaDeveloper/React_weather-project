import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { thunkStartLoadData } from "./../../redux/actions";
import MiniCard from "./miniCard";
import "./card.css";

const TopBar = () => {
  const arrTop = useSelector((state) => state.arrTop);
  const dispatch = useDispatch();

  const firstLoadThunk = () => {
    dispatch(thunkStartLoadData());
  };

  useEffect(() => {
    firstLoadThunk();
  }, []);

  useEffect(() => {
    // console.log(arrTop);
  }, [arrTop]);
  // testData

  const cardRender = arrTop.map(
    ({ id, day, dateDay, month, img, tMin, tMax }) => (
      <MiniCard
        key={id}
        day={day}
        dateDay={dateDay}
        month={month}
        img={img}
        tMin={tMin}
        tMax={tMax}
      />
    )
  );
  return <div className={"positionTopCard"}>{cardRender}</div>;
};
export default TopBar;
