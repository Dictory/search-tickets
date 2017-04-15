import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';

import '../styles/index.css';
import configureStore from '../reducers/configureStore';

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
