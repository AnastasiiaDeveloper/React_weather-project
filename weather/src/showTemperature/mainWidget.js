import InfoBar from "./infoBar/infoBar";
import TopBar from "./topBar/topBar";
import { useState, useEffect } from "react";
// import UnderBar from "./infoBar/underBar"
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

const MainWidget = () => {
  const [infBarShow, setInfBarShow] = useState(false);
  const detailsArr = useSelector((state) => state.detailsArr);
  useEffect(() => {
    if (detailsArr === null) {
      setInfBarShow(false);
    } else {
      setInfBarShow(true);
    }
  }, [detailsArr]);
  return (
    <div>
      <TopBar />
      {infBarShow ? (
        <>
          {" "}
          {/* <Route path="/" component={InfoBar} /> */}
          <Route path="/day/:numDay" component={InfoBar} />
        </>
      ) : null}

      {/* <UnderBar/> */}
    </div>
  );
};

export default MainWidget;
