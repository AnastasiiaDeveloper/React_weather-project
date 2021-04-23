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
            <div>
              <p>{infState.yearNum}</p>
              {/* <p>2021</p> */}
            </div>
            <div>
              <p>{infState.monthNum}</p>
              {/* <p>04</p> */}
            </div>
            <div>
              <p>{infState.numDay}</p>
            </div>
            <div>
              <p>{infState.dayNum}</p>
              {/* <p>Monday</p> */}
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${infState.img}.png`}
              />
              {/* <p>{infState.img}</p> */}
              {/* <p>img</p> */}
            </div>
            <div>
              <p>{infState.todayTemp}</p>
              {/* <p>todayTemp</p> */}
            </div>
            <div>
              <p>{infState.likeTemp}</p>
              {/* <p>likeTemp</p> */}
            </div>
            <div>
              {/* <p>{wind}</p> */}
              <p>wind</p>
            </div>
            <div>
              {/* <p>{speedWind}</p> */}
              <p>speed</p>
            </div>
            <div>
              {/* <p>{humidity}</p> */}
              <p>humidity</p>
            </div>
            <div>
              {/* <p>{pressure}</p> */}
              <p>pressure</p>
            </div>
          </div>
          {/* передай сюда массив в inderBar */}
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
