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
        <div>
          <p>{dateDay}</p>
        </div>
        <div>
          <p>{month}</p>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/w/${img}.png`} />
        </div>
        <div>
          <p>
            {" "}
            min: {min} {tMin} &deg;
          </p>
        </div>
        <div>
          <p>
            {" "}
            max: {max} {tMax} &deg;
          </p>
        </div>
      </div>
    </NavLink>
  );
};
export default MiniCard;
