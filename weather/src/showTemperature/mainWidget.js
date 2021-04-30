import InfoBar from "./infoBar/infoBar";
import TopBar from "./topBar/topBar";
import { useState, useEffect } from "react";
// import UnderBar from "./infoBar/underBar"
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { errShow } from "./../redux/actions";

const MainWidget = () => {
  const [infBarShow, setInfBarShow] = useState(false);
  const [stateShow, setStateShow] = useState(false);
  const detailsArr = useSelector((state) => state.detailsArr);
  const showErr = useSelector((state) => state.showErrFind);
  const dispatch = useDispatch();
  useEffect(() => {
    if (detailsArr === null) {
      setInfBarShow(false);
    } else {
      setInfBarShow(true);
    }
  }, [detailsArr]);
  useEffect(() => {
    setStateShow(showErr);
  }, [showErr]);
  return (
    <div>
      {stateShow ? null : (
        <>
          <TopBar />{" "}
          {infBarShow ? (
            <>
              {" "}
              <Route path="/" exact component={InfoBar} />
              <Route path="/day/:numDay" component={InfoBar} />
            </>
          ) : null}
        </>
      )}

      {/* <UnderBar/> */}
    </div>
  );
};

export default MainWidget;
