import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { thunkStartLoadData } from "./../../redux/actions";
import MiniInfo from "./miniInfo";
import "./info.css";

const UnderBar = () => {
  const detailsArr = useSelector((state) => state.detailsArr);
  const dispatch = useDispatch();

  const firstLoadThunk = () => {
    dispatch(thunkStartLoadData());
  };

  useEffect(() => {
    firstLoadThunk();
  }, []);

  useEffect(() => {
    // console.log(detailsArr);
  }, [detailsArr]);
  // testData

  const secondCardRender = detailsArr.map(({ time, img, temp, humidity }) => {
    return (
      <>
        <MiniInfo time={time} img={img} temp={temp} humidity={humidity} />
      </>
    );
  });
  return <div className={"positionUnderCard"}>{secondCardRender}</div>;
};
export default UnderBar;
