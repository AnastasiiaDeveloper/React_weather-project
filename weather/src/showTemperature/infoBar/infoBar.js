import { useParams } from "react-router-dom";
import { useEffect } from "react";
const InfoBar = () => {
  const { numDay } = useParams();

  useEffect(() => {
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
//   1.1 создать структуру на базе api для infoBar (каждого дня)
//   1.2 написать функцию для создания этого массива
// 2.создать верстку и вывести в виджет на екран
