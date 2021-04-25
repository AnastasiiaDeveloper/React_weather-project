import "./info.css";


const MiniInfo = ({ time, img, temp, humidity }) => {
  return (
    <div className={"miniCardBlock"}>
      <div>
        <p>time: {time}</p>
      </div>
      <div>
      <img className={"miniImg"} src={`http://openweathermap.org/img/w/${img}.png`} />
      </div>
      <div>
        <p className={"miniTemp"}> temp: {temp} </p>
      </div>
      <div>
        <p>humidity: {humidity} %</p>
      </div>
    </div>
    
  );
};
export default MiniInfo;