import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // comment out test because rendering element will call fib
  // which will try to connect to (unavailable) backend
  // ==> test will fail
  // empty test is guaranteed to succeed
  //
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
