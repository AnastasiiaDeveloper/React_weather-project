import "./card.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MiniCard = ({ day, dateDay, month, img, tMin, tMax }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const putSign = (temp, setTemp) => {
    if (temp > 0) {
      setTemp("+");
    } else if (temp < 1) {
      setTemp("");
    }
  };
  useEffect(() => {
    putSign(tMin, setMin);
    putSign(tMax, setMax);
  }, [tMin, tMax]);

  return (
    <NavLink to={`/day/${dateDay}`} style={{ textDecoration: "none" }}>
      <div className={"cardBlock"}>
        <div>
          <p>{day}</p>
        </div>
        <div className={"date"}>
          <p className={"dateDay"}>{dateDay}</p>
          <p className={"month"}>{month}</p>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/w/${img}.png`} />
        </div>
        <div className={"temp"}>
          <p className={"min"}>
            {" "}
            min: {min} {tMin} &deg;
          </p>
          <p className={"max"}>
            {" "}
            max: {max} {tMax} &deg;
          </p>
        </div>
      </div>
    </NavLink>
  );
};
export default MiniCard;
