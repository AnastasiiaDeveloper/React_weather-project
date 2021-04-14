export default function transformDataForTopBar(oneCallData) {
  const { daily } = oneCallData;
  console.log(oneCallData);
  const arrCountDays = [0, 1, 2, 3, 4];
  const getDayWeek = (date) => {
    const arrDaysName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return arrDaysName[date.getDay()];
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
    let tempAllDays = allDayTemp(dateDay.getDate());
    return {
      day: nameDay,
      dateDay: dateDay.getDate(),
      month: "april",
      img: tempAllDays[0].weather[0].icon,
      tMin: Math.floor(tempAllDays[0].temp.min - 273),
      tMax: Math.floor(tempAllDays[0].temp.max - 273),
    };
  });
}
