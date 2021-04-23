export default function transformDataForTopBar(oneCallData) {
  const { daily } = oneCallData;

  const arrCountDays = [0, 1, 2, 3, 4];
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

  const getSuitableMonth = (date) => {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthName[date.getMonth()];
  };

  const getNewDay = (num) => {
    let today = new Date();
    return new Date(today.setDate(today.getDate() + num));
  };

  const allDayTemp = (numDay) => {
    return daily.filter((el) => {
      let dataReturn = new Date(el.dt * 1000);
      return dataReturn.getDate() === numDay;
    });
  };
  return arrCountDays.map((num) => {
    //текущий день
    const dateDay = getNewDay(num);
    const nameDay = getDayWeek(dateDay);

    const nameMonth = getSuitableMonth(dateDay);

    let tempAllDays = allDayTemp(dateDay.getDate());
    let minTemp = Math.floor(tempAllDays[0].temp.min - 273);
    let maxTemp = Math.floor(tempAllDays[0].temp.max - 273);

    return {
      day: nameDay,
      month: nameMonth,
      dateDay: dateDay.getDate(),
      img: tempAllDays[0].weather[0].icon,
      tMin: minTemp,
      tMax: maxTemp,
    };
  });
}

// &#176
// &deg
