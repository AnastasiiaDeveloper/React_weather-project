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
    function getDaySet(el, getD) {
      let dataArrT = new Date(el.dt * 1000);
      dataArrT.setMilliseconds(-3 * 60 * 60 * 1000);
      if (dataArrT.getDate() === getD) {
        return {
          el,
          time: dataArrT.getHours(),
        };
      }
    }

    const allDateTemp = list.filter((el) => {
      return getDaySet(el, num);
    });
    const findHours = (hours) => {
      return allDateTemp.filter((el, time) => {
        if (time === hours) {
          return el;
        }
      });
    };
    return [
      {
        partOfTheDay: "night",
        twoTimes: [
          {
            time: "00:00",
            img: findHours(0)[0].weather[0].icon,
            temp: Math.floor(findHours(0)[0].main.temp - 273),
            humidity: findHours(0)[0].main.humidity,
          },
          {
            time: "03:00",
            img: "07d",
            temp: "+4",
            humidity: "0,02",
          },
        ],
      },
      {
        partOfTheDay: "morning",
        twoTimes: [
          {
            time: "06:00",
            img: "08d",
            temp: "+4",
            humidity: "0,02",
          },
          {
            time: "09:00",
            img: "07d",
            temp: "+4",
            humidity: "0,02",
          },
        ],
      },
      {
        partOfTheDay: "day",
        twoTimes: [
          {
            time: "12:00",
            img: "08d",
            temp: "+4",
            humidity: "0,02",
          },
          {
            time: "15:00",
            img: "07d",
            temp: "+4",
            humidity: "0,02",
          },
        ],
      },
      {
        partOfTheDay: "evening",
        twoTimes: [
          {
            time: "18:00",
            img: "08d",
            temp: "+4",
            humidity: "0,02",
          },
          {
            time: "21:00",
            img: "07d",
            temp: "+4",
            humidity: "0,02",
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
