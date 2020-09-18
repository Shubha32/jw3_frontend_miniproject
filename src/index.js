import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Container,Row, Col} from 'react-bootstrap';
import { withRouter } from "react-router";
import * as serviceWorker from './serviceWorker';
import Menubar from './Menubar';
import Bookings from './Bookings';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>   
    <Menubar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
