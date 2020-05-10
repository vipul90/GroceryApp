/*global describe beforeEach it expect*/

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductGroceryList from '../../grocery/components/product/ProductGroceryList';
import initialState from '../../state/initialState';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

const createStore = configureStore([]);
 
describe('My Product Grocery List Component', () => {
  let storeInstance;
  let componentInstance;
 
  beforeEach(() => {
    storeInstance = createStore({
        GroceryDetails : initialState
    });

    componentInstance = shallow(
      <Provider store={storeInstance}>
        <ProductGroceryList />
      </Provider>
    );
  });
 
  it('should render with given state and store', () => {
        expect(toJson(componentInstance)).toMatchSnapshot();
  });
});
