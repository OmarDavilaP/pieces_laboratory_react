import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Routes from './component/routes/routes';
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter><Provider store={store}>
    <Routes />
  </Provider></BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
