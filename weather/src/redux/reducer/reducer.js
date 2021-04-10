import {LOAD_DATA} from './../actionType'
import { Provider } from 'react-redux';

const initialState = {
    obj: {},
}

  // Болванка под reducer
  const reducer = (state = initialState, action) => state;
  
  const store = createStore(reducer);
  
  <Provider store={store}>
    <App />
  </Provider>;