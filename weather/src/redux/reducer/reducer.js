import { INPUT_CITY, LOAD_DATA } from "./../actionType";
import transformDataForTopBar from "./../../api/trasformDataForTopBar";
import infoDetailsArr from "./../../api/infoBarTransform";

const initialState = {
  allDataObjTwo: {},
  findCity: "Киев",
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
  detailsArr: [
    {
      time: "---",
      img: "04d",
      temp: "---",
      humidity: "---",
      
    },
  ],
  // detailsArr: null,
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
      const { fiveDaysData, oneCallData } = action.data;
      return {
        ...state,
        allDataObjTwo: action.data,
        arrTop: transformDataForTopBar(oneCallData),
        detailsArr: infoDetailsArr(fiveDaysData, oneCallData),
      };

      break;

    default:
      return state;
      break;
  }
}
