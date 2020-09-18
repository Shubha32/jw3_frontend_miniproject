import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import AlertBookList from './alert';
import BookingsButtons from './buttons';
import BookingsTable from './table';

const Bookings = () =>{

  return(<Container>
      <Row>
      <AlertBookList />
      </Row>
      <p></p>
      <BookingsButtons />
      <p></p>
      <BookingsTable />
  </Container>);

}

export default Bookings;