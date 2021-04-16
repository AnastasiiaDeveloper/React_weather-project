import InfoBar from "./infoBar/infoBar";
import TopBar from "./topBar/topBar";
import { Route } from "react-router-dom";

const MainWidget = () => {
  return (
    <div>
      <TopBar />
      <Route path="/day/:numDay" component={InfoBar} />
    </div>
  );
};

export default MainWidget;
