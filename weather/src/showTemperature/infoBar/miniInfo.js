import "./info.css";


const MiniInfo = ({ time, img, temp, humidity }) => {
  return (
    <div className={"miniCardBlock"}>
      <div>
        <p>{time = "00:00"}</p>
      </div>
      <div>
        <p>{img}</p>
      </div>
      <div>
        <p>{temp}</p>
      </div>
      <div>
        <p>{humidity}</p>
      </div>
    </div>
    
  );
};
export default MiniInfo;