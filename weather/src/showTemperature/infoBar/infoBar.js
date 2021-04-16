import { useParams } from "react-router-dom";
import { useEffect } from "react";
const InfoBar = () => {
  const { numDay } = useParams();

  useEffect(() => {
    console.log("show information" + numDay + "date day");
  }, [numDay]);

  return (
    <>
      <p>InfoBar information for {numDay} day</p>
    </>
  );
};
export default InfoBar;
