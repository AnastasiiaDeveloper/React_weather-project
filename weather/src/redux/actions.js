import { INPUT_CITY, LOAD_DATA, PAGE_SET, FIND_DAY } from "./actionType";
import api from "./../api/apiWeather";

export const inputCity = (city) => {
  return {
    type: INPUT_CITY,
    city,
  };
};
export const pageSet = (page) => {
  return {
    type: PAGE_SET,
    page,
  };
};
export const loadDataAction = (data) => {
  return {
    type: LOAD_DATA,
    data,
  };
};
export const findDay = (page) => {
  return {
    type: FIND_DAY,
    page,
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
