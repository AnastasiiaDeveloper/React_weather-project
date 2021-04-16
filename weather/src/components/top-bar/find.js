import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  inputCity,
  thunkStartLoadData,
  thunkSetInsertedCity,
} from "../../redux/actions";

const Find = () => {
  const [cityName, setCityName] = useState("");
  // const [nameCityShow, setNameCityShow] = useState("");

  const stateCity = useSelector((state) => state);

  const cityShow = useSelector((state) => state.findCity);

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
    console.log(stateCity);
  }, [stateCity]);

  return (
    <div>
      <input
        type="search"
        onChange={handleOnChange}
        onKeyPress={getDataOnEnter}
        value={cityName}
      />
      <button onClick={getData}> Here we go</button>
      {cityShow}
    </div>
  );
};
export default Find;
