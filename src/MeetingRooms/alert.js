import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import {AiFillInfoCircle} from "react-icons/ai";
import {Button} from 'react-bootstrap';

function AlertMeetingRooms() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <Alert.Heading><AiFillInfoCircle size="1.5em" /> Meeting Rooms</Alert.Heading>
          <p>
          Below is a list of all meeting rooms. You an add rooms, change status and see all bookings for each room.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>What can I do?</Button>;
  }

  export default AlertMeetingRooms;