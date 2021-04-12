import { INPUT_CITY, LOAD_DATA } from "./../actionType";
import { Provider } from "react-redux";

const initialState = {
  allDataObjTwo: {},
  findCity: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_CITY:
      return {
        ...state,
        findCity: action.city,
      };
      break;

    case LOAD_DATA:
      return {
        ...state,
        allDataObjTwo: action.data,
      };

      break;

    default:
      return state;
      break;
  }
}
