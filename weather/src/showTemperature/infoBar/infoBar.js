import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const InfoBar = () => {
  const { numDay } = useParams();
  const detailDay = useSelector((state) => state.detailsArr);

  useEffect(() => {
    if (detailDay === null) {
      console.log("null");
    } else {
      const dayInf = detailDay.filter(({ dayNum }) => +dayNum === +numDay);
      console.log(dayInf);
    }
    console.log("show information" + numDay + "date day");
  }, [numDay]);

  return (
    <>
      <p>InfoBar information for {numDay} day</p>
    </>
  );
};
export default InfoBar;
// 1. вывести в консоль
// 1.1 создать структуру на базе api для infoBar (каждого дня)
// 1.2 написать функцию для создания этого массива
// 2.создать верстку и вывести в виджет на екран
