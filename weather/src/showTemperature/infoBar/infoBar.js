import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import UnderBar from "./underBar"
import "./info.css";

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
    <div className={"underBlock"}>
      <div className={"cardBlock2"}>
        <div>
          <p>2021</p>
        </div>
        <div>
          <p>04</p>
        </div>
        <div>
          <p>{numDay}</p>
        </div>
        <div>
          <p>Monday</p>
        </div>
        <div>
          <p>img</p>
        </div>
        <div>
          <p>temp:+8</p>
        </div>
        <div>
          <p>feels like:-8</p>
        </div>
        <div>
          <p>wind</p>
        </div>
        <div>
          <p>speedWind</p>
        </div>
        <div>
          <p>humidity</p>
        </div>
        <div>
          <p>pressure</p>
        </div>
      </div>
      <UnderBar/>
      </div>
    </>
  );
};
export default InfoBar;
// 1. вывести в консоль
// 1.1 создать структуру на базе api для infoBar (каждого дня)
// 1.2 написать функцию для создания этого массива
// 2.создать верстку и вывести в виджет на екран
