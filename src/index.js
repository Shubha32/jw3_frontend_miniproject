import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Container,Row, Col, Image, Figure} from 'react-bootstrap';
import { withRouter } from "react-router";
import * as serviceWorker from './serviceWorker';
import Menubar from './Menubar';
import Bookings from './Bookings';
import MeetingRooms from './MeetingRooms';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import logo from "./MeetingRooms/largeConference.jpg"

ReactDOM.render(
  <React.StrictMode>   
    <Bookings />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
