import React from 'react';
import ReactDOM from 'react-dom';
import signUp from './signUp';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<signUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});