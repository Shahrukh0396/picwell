import React from "react";
import ReactDOM from "react-dom";
import Main from "./Screens/Main";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './Store'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
)