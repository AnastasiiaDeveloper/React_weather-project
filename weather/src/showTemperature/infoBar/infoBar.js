import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import UnderBar from "./underBar";
import { pageSet, findDay } from "./../../redux/actions";
import "./info.css";

const InfoBar = () => {
  const history = useHistory();
  const [infState, setInfState] = useState(false);
  const { numDay } = useParams();

  const dispatch = useDispatch();
  const detailDay = useSelector((state) => state.detailsDay);
  const pageDay = useSelector((state) => state.page);

  useEffect(() => {
    if (numDay === undefined) {
      const today = new Date().getDate();
      dispatch(pageSet(today));
      history.push(`/day/${today}`);
    } else {
      dispatch(pageSet(numDay));
    }
  }, [numDay]);

  useEffect(() => {
    if (pageDay !== null) {
      dispatch(findDay(pageDay));
    }
  }, [pageDay]);
  useEffect(() => {
    if (detailDay === null) {
      setInfState(false);
    } else {
      setInfState(detailDay);
    }
  }, [detailDay]);

  return (
    <>
      {infState ? (
        <div className={"underBlock"}>
          <div className={"cardBlock2"}>
            <div className={"selectedDate"}>
              <p className={"num"}>{infState.dayNum}</p>
              <p className={"month"}>0{infState.monthNum}</p>
              <p>20{infState.yearNum}</p>
            </div>
            <div>
              <img className={"img"}
                src={`http://openweathermap.org/img/w/${infState.img}.png`}
              />
            </div>
            <div>
              <p className={"tempToday"}> temp: {infState.todayTemp} </p>
            </div>

            <div>
              <p>  feels like: {infState.likeTemp} </p>
            </div>
            <div>
              <p>wind-speed: {infState.speedWind} m/s</p>
            </div>
            <div>
              <p>humidity: {infState.humidity} %</p>
            </div>
            <div>
              <p>pressure: {infState.pressure} hPa</p>
            </div>
          </div>
          {/* передай сюда массив в underBar */}
          <UnderBar />
        </div>
      ) : null}
    </>
  );
};
export default InfoBar;
// 1. вывести в консоль
// 1.1 создать структуру на базе api для infoBar (каждого дня)
// 1.2 написать функцию для создания этого массива
// 2.создать верстку и вывести в виджет на екран
