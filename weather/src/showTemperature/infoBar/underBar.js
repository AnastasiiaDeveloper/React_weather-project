import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { thunkStartLoadData } from "./../../redux/actions";
import MiniInfo from "./miniInfo";
import "./info.css";

const UnderBar = () => {
  const arrTemp = useSelector((state) => state.arrTemp);
  const dispatch = useDispatch();

  const firstLoadThunk = () => {
    dispatch(thunkStartLoadData());
  };

  useEffect(() => {
    firstLoadThunk();
  }, []);

  useEffect(() => {
   
  }, [arrTemp]);
  

  const secondCardRender = arrTemp.map(({ time, img, temp, humidity }) => {
    return (
      <>
        <MiniInfo time={time} img={img} temp={temp} humidity={humidity} />
      </>
    );
  });
  return <div className={"positionUnderCard"}>{secondCardRender}</div>;
};
export default UnderBar;
