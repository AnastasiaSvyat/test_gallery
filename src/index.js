import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux'
import { Provider,connect } from 'react-redux'
import allReducers from './containers/reducer/allReducers';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

const ConnectedApp = connect((state ) => {
  console.log(state);
  return state;
})(App);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);