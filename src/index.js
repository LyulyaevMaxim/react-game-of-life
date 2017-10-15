import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import "./reset.css";
import "./styles.css";

import App from "./App";
import reducers from './reducers';

ReactDOM.render(
  <App/>, document.getElementById("root"));
registerServiceWorker();
