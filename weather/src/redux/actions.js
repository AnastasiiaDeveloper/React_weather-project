import { INPUT_CITY, LOAD_DATA } from "./actionType";
import api from "./../api/apiWeather";

export const inputCity = (city) => {
  return {
    type: INPUT_CITY,
    city,
  };
};

export const loadDataAction = (data) => {
  return {
    type: LOAD_DATA,
    data,
  };
};

export const thunkStartLoadData = () => {
  return async (dispatch) => {
    const data = await api();
    dispatch(loadDataAction(data));
  };
};

export const thunkSetInsertedCity = (city) => {
  return async (dispatch) => {
    const data = await api(city);
    dispatch(loadDataAction(data));
  };
};
