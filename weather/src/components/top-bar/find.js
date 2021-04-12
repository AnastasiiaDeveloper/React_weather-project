import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { inputCity, thunkStartLoadData } from "../../redux/actions";

const Find = () => {
  const [cityName, setCityName] = useState("");

  const stateCity = useSelector((state) => state);

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(inputCity(cityName));
  };

  const getDataOnEnter = (e) => {
    if (e.key === "Enter") {
      getData();
    }
  };

  const handleOnChange = (e) => {
    setCityName(e.target.value);
  };

  const firstLoadThunk = () => {
    dispatch(thunkStartLoadData());
  };

  useEffect(() => {
    firstLoadThunk();
  }, []);

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
      {/* <button onClick={testThunk}> Thunk load data</button> */}
    </div>
  );
};
export default Find;
// top-Bar
// inf-bar

// main-widget -> top + inf
