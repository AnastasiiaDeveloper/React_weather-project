import InfoBar from "./infoBar/infoBar";
import TopBar from "./topBar/topBar";
import UnderBar from "./infoBar/underBar"
import { Route } from "react-router-dom";

const MainWidget = () => {
  return (
    <div>
      <TopBar />
      <Route path="/day/:numDay" component={InfoBar} />
      {/* <UnderBar/> */}
    </div>
  );
};

export default MainWidget;
