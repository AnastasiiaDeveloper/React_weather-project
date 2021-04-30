import { v4 as uuidv4 } from "uuid";
export default function infoDetailsArr(fiveDaysData, arrOneCall) {
  const { list } = fiveDaysData;
  const arrCountDays = [0, 1, 2, 3, 4];
  const getNewData = (num) => {
    let today = new Date();
    return new Date(today.setDate(today.getDate() + num));
  };
  const getDayWeek = (date) => {
    const DayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return DayName[date.getDay()];
  };
  const allDayTemp = (num) => {
    return arrOneCall.daily.filter((el) => {
      let dataReturn = new Date(el.dt * 1000);
      return dataReturn.getDate() === num;
    });
  };
  const allTimeForDay = (num) => {
    function getInfoDay(el, numDay) {
      let timeTransform = new Date(el.dt * 1000);
      timeTransform.setMilliseconds(-3 * 60 * 60 * 1000);
      if (timeTransform.getDate() === numDay) {
        return {
          info: el,
          time: timeTransform.getHours(),
        };
      }
    }

    const allDateTemp = list.map((el) => {
      return getInfoDay(el, num);
    });
    const findHours = (hours) => {
      const data = allDateTemp.filter(function (element) {
        return element !== undefined;
      });
      return data.filter(({ info, time }) => {
        if (time === hours) {
          return info;
        }
      });
    };
    const ifEmptyArr = (hours, param) => {
      switch (param) {
        case "img":
          return findHours(hours).length < 1
            ? false
            : findHours(hours)[0].info.weather[0].icon;
          break;
        case "temp":
          return findHours(hours).length < 1
            ? "--"
            : Math.floor(findHours(hours)[0].info.main.temp - 273);
          break;
        default:
          return findHours(hours).length < 1
            ? "--"
            : findHours(hours)[0].info.main.humidity;
          break;
      }
    };
    return [
      {
        id: uuidv4(),
        partOfTheDay: "night",
        twoTimes: [
          {
            id: uuidv4(),
            time: "00:00",
            img: ifEmptyArr(0, "img"),
            temp: ifEmptyArr(0, "temp"),
            humidity: ifEmptyArr(0, "humidity"),
          },
          {
            id: uuidv4(),
            time: "03:00",
            img: ifEmptyArr(3, "img"),
            temp: ifEmptyArr(3, "temp"),
            humidity: ifEmptyArr(3, "humidity"),
          },
        ],
      },
      {
        id: uuidv4(),
        partOfTheDay: "morning",
        twoTimes: [
          {
            id: uuidv4(),
            time: "06:00",
            img: ifEmptyArr(6, "img"),
            temp: ifEmptyArr(6, "temp"),
            humidity: ifEmptyArr(6, "humidity"),
          },
          {
            id: uuidv4(),
            time: "09:00",
            img: ifEmptyArr(9, "img"),
            temp: ifEmptyArr(9, "temp"),
            humidity: ifEmptyArr(9, "humidity"),
          },
        ],
      },
      {
        id: uuidv4(),
        partOfTheDay: "day",
        twoTimes: [
          {
            id: uuidv4(),
            time: "12:00",
            img: ifEmptyArr(12, "img"),
            temp: ifEmptyArr(12, "temp"),
            humidity: ifEmptyArr(12, "humidity"),
          },
          {
            id: uuidv4(),
            time: "15:00",
            img: ifEmptyArr(15, "img"),
            temp: ifEmptyArr(15, "temp"),
            humidity: ifEmptyArr(15, "humidity"),
          },
        ],
      },
      {
        id: uuidv4(),
        partOfTheDay: "evening",
        twoTimes: [
          {
            id: uuidv4(),
            time: "18:00",
            img: ifEmptyArr(18, "img"),
            temp: ifEmptyArr(18, "temp"),
            humidity: ifEmptyArr(18, "humidity"),
          },
          {
            id: uuidv4(),
            time: "21:00",
            img: ifEmptyArr(21, "img"),
            temp: ifEmptyArr(21, "temp"),
            humidity: ifEmptyArr(21, "humidity"),
          },
        ],
      },
    ];
  };
  return arrCountDays.map((num) => {
    // today all inf
    const dateDay = getNewData(num);
    // number day
    const numDayGet = dateDay.getDate();
    // name day
    const nameDay = getDayWeek(dateDay);
    //array with temp all day
    const allTimeForDayArr = allTimeForDay(numDayGet);
    // oneCall
    const tempAllDayOneCall = allDayTemp(numDayGet)[0];
    return {
      id: uuidv4(),
      yearNum: dateDay.getFullYear().toString().substr(-2),
      monthNum: dateDay.getMonth() + 1,
      dayNum: numDayGet,
      dayName: nameDay,
      img: tempAllDayOneCall.weather[0].icon,
      todayTemp: Math.floor(tempAllDayOneCall.temp.day - 273),
      likeTemp: Math.floor(tempAllDayOneCall.feels_like.day - 273),
      wind: tempAllDayOneCall.wind_deg,
      speedWind: tempAllDayOneCall.wind_speed,
      humidity: tempAllDayOneCall.humidity,
      pressure: tempAllDayOneCall.pressure,
      //array with temp all day
      tempArr: allTimeForDayArr,
    };
  });
}
