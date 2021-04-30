import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./find.css";
import { inputCity, thunkSetInsertedCity } from "../../redux/actions";

const Find = () => {
  const [cityName, setCityName] = useState("");
  const [cityNameSelector, setCityNameSelector] = useState("");
  const cityShow = useSelector((state) => state.findCity);
  const [stateShow, setStateShow] = useState(false);
  const showErr = useSelector((state) => state.showErrFind);

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(inputCity(cityName));
    dispatch(thunkSetInsertedCity(cityName));
  };

  const getDataOnEnter = (e) => {
    if (e.key === "Enter") {
      getData();
    }
  };

  const handleOnChange = (e) => {
    setCityName(e.target.value);
  };

  useEffect(() => {
    console.log(cityShow);
    setCityNameSelector(cityShow);
  }, [cityShow]);
  useEffect(() => {
    setStateShow(showErr);
  }, [showErr]);

  return (
    <div className="part-for-input">
      <input
        type="search"
        onChange={handleOnChange}
        onKeyPress={getDataOnEnter}
        value={cityName}
        placeholder="Enter the city you are interested in"
        className="input"
      />
      <button onClick={getData} className="button">
        {" "}
        Here we go
      </button>
      <p className={"cityShow"} style={{ fontSize: "2em", color: "green" }}>
        {stateShow ? (
          <>The city {cityNameSelector} doesn't exist</>
        ) : (
          <>{cityNameSelector}</>
        )}
      </p>
    </div>
  );
};
export default Find;
