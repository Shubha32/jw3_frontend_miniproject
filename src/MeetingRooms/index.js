import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import AlertMeetingRooms from './alert';
import MeetingRoomsButtons from './buttons';
import MeetingRoomsTable from './table';

const MeetingRooms = () =>{

  return(<Container>
      <Row>
      <AlertMeetingRooms />
      </Row>
      <p></p>
      <MeetingRoomsButtons />
      <p></p>
      <MeetingRoomsTable />
  </Container>);

}

export default MeetingRooms;