import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./reset.css";
import "./styles.css";
import App from "./containers/app";
import registerServiceWorker from "./registerServiceWorker";
const store = configureStore();

ReactDOM.render(
  <Provider store={store} /*{createStoreWithMiddleware(reducers)}*/>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
