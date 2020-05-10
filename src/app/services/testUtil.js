import { applyMiddleware, createStore } from 'redux';

const middlewares = [];

export const findByTestAtrribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const mockStore = (reducer, initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(reducer, initialState);
};
