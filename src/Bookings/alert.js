import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import {AiFillInfoCircle} from "react-icons/ai";
import {Button} from 'react-bootstrap';

function AlertBookList() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <Alert.Heading><AiFillInfoCircle size="1.5em" /> Booking List</Alert.Heading>
          <p>
          Review a list of all room bookings. Using the quick buttons below, you can manually add a new booking and change its status.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>What can I do?</Button>;
  }

  export default AlertBookList;