import axios from "axios";



export const loadDataAction = (data) => {

    return { type: LOAD_DATA, data };
  
  };
  
  export const thunkLoadData = () => {
  
    return (dispatch) => {
  
      axios.get("http://").then((data) => {
  
        dispatch(loadDataAction(data));
  
      });
  
    };
};