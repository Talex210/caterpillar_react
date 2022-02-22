import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./Redux/ReduxStore";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App state={store.getState()}/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
