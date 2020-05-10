import { createStore, combineReducers, applyMiddleware } from 'redux';
import GroceryDetails from '../action/action';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({GroceryDetails});

function logger({ getState }) {
    return next => action => {
      console.log('dispatching', action);
      let val = next(action);
      console.log('state', getState());
      return val;
    };
  }

  const Store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(logger))
  );

  export default Store;


