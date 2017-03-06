import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Revue from 'vue'; // ????


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = { };

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
