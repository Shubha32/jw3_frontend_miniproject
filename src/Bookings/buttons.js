import React, {Fragment} from 'react';
import {Button} from 'react-bootstrap';
import './style.css';

const BookingsButtons = () =>{

    const filterStatus = (evt) =>
    {
        console.log(evt.target.value);
    }

    return(
        <Fragment>
            <Button href="#" variant="secondary">+ Add Booking</Button>
            <Button onClick= {filterStatus} type="button" variant="secondary" className="statusButton" value="Cancelled">Cancelled</Button>
            <Button onClick= {filterStatus} type="button" variant="secondary" className="statusButton" value="Confirmed">Confirmed</Button>
            <Button onClick= {filterStatus} type="button" variant="secondary" className="statusButton" value="Pending">Pending</Button>
            <Button onClick= {filterStatus} type="button" variant="secondary" className="statusButton" value="All">All</Button>
        </Fragment>

            )
}

export default BookingsButtons;