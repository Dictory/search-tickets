import React, { Component } from 'react';
import { Provider } from 'react-redux';
import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

import App from '../containers/App';
import '../styles/index.css';
import configureStore from '../reducers/configureStore';

es6Promise.polyfill();

class StartApp extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default StartApp;
