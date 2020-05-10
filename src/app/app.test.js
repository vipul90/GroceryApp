/*global describe it*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

describe("App renders without crashing",() =>{
  it('check app renders without any issue', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

