import "./card.css";
const MiniCard = ({ day, dateDay, month, img, tMin, tMax }) => {
  return (
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
        <p>{tMin}</p>
      </div>
      <div>
        <p>{tMax}</p>
      </div>
    </div>
  );
};
export default MiniCard;
