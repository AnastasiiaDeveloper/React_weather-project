import {
  INPUT_CITY,
  LOAD_DATA,
  PAGE_SET,
  FIND_DAY,
  SHOW_ERR,
} from "./../actionType";
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
  arrTemp: [
    {
      time: "00:00",
      img: "04d",
      temp: "5",
      humidity: "9",
    },
  ],
  detailsArr: null,
  page: null,
  detailsDay: null,
  showErrFind: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERR:
      return {
        ...state,
        showErrFind: action.valueShow,
      };
      break;
    case INPUT_CITY:
      return {
        ...state,
        findCity: action.city,
      };
      break;

    case LOAD_DATA:
      const { fiveDaysData, oneCallData } = action.data;
      if (fiveDaysData === 404) {
        console.log("такого города не найдено");
        return {
          ...state,
          showErrFind: true,
        };
      } else {
        return {
          ...state,
          allDataObjTwo: action.data,
          arrTop: transformDataForTopBar(oneCallData),
          detailsArr: infoDetailsArr(fiveDaysData, oneCallData),
          showErrFind: false,
        };
      }

      break;
    case PAGE_SET:
      return {
        ...state,
        page: action.page,
      };
    case FIND_DAY: {
      const page = action.page;

      const dayF = state.detailsArr.find(({ dayNum }) => +page === +dayNum);
      console.log(page);
      return {
        ...state,
        detailsDay: dayF,
      };
    }
    default:
      return state;
      break;
  }
}
