import { INPUT_CITY, LOAD_DATA } from "./../actionType";
import transformDataForTopBar from "./../../api/trasformDataForTopBar";

const initialState = {
  allDataObjTwo: {},
  findCity: "",
  arrTop: [
    {
      day: "monday",
      dateDay: 14,
      month: "april",
      img: "04d",
      tMin: "+5",
      tMax: "+10",
    },
  ],
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
        arrTop: transformDataForTopBar(action.data.oneCallData),
      };

      break;

    default:
      return state;
      break;
  }
}
