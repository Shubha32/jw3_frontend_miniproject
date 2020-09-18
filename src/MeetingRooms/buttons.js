import React, {Fragment} from 'react';
import {Button} from 'react-bootstrap';
import './style.css';

const MeetingRoomsButtons = () =>{

    const filterStatus = (evt) =>
    {
        console.log(evt.target.value);
    }

    return(
        <Fragment>
            <Button href="#" variant="secondary">+ Add Room</Button>
            <Button onClick= {filterStatus} type="button" variant="secondary" className="statusButton" value="Inactive">Inactive</Button>
            <Button onClick= {filterStatus} type="button" variant="secondary" className="statusButton" value="Active">Active</Button>
            <Button onClick= {filterStatus} type="button" variant="secondary" className="statusButton" value="All">All</Button>
        </Fragment>

            )
}

export default MeetingRoomsButtons;