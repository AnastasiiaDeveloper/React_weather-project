import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import UnderBar from "./underBar";
import { pageSet, findDay } from "./../../redux/actions";
import "./info.css";
import MainInfo from "./mainInfo";

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
      {
        infState ? (
          <MainInfo
            dayNum={infState.dayNum}
            monthNum={infState.monthNum}
            img={infState.img}
            yearNum={infState.yearNum}
            todayTemp={infState.todayTemp}
            likeTemp={infState.likeTemp}
            speedWind={infState.speedWind}
            humidity={infState.humidity}
            pressure={infState.pressure}
            tempArr={infState.tempArr}
          />
        ) : null
        // loader
      }
    </>
  );
};
export default InfoBar;
// 1. вывести в консоль
// 1.1 создать структуру на базе api для infoBar (каждого дня)
// 1.2 написать функцию для создания этого массива
// 2.создать верстку и вывести в виджет на екран
