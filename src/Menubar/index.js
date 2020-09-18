import React, {Fragment} from 'react';
import {Navbar, Nav, NavDropdown, Button, Container, Row, Col, NavItem } from 'react-bootstrap';
import {AiFillDashboard} from "react-icons/ai";
import {FaClipboardList, FaToolbox, FaPizzaSlice, FaAdobe} from "react-icons/fa";
import {RiLayoutFill} from "react-icons/ri";
import {GiMushroomHouse} from "react-icons/gi";
import {HiUsers} from "react-icons/hi";
import {GrLogout} from "react-icons/gr";
import './menubar.css';

 const Menubar = () => {

    return (
         <Navbar collapseOnSelect expand="lg" bg="light">

              <Navbar.Brand href="#home">
                <FaAdobe/>
                Meeting-Room-Booking
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">

              <Nav.Link href="#dashboard">
                <AiFillDashboard />
                 Dashboard
              </Nav.Link>

              <FaClipboardList />
              <NavDropdown title= {"Bookings"} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#bookings">View Bookings</NavDropdown.Item>
                <NavDropdown.Item href="#addBooking">Add New Booking</NavDropdown.Item>
              </NavDropdown>

            <GiMushroomHouse />
            <NavDropdown title="Rooms" id="collasible-nav-dropdown">
             <NavDropdown.Item href="#rooms">View Rooms</NavDropdown.Item>
             <NavDropdown.Item href="#addRoom">Add New Room</NavDropdown.Item>
            </NavDropdown>
         
              <RiLayoutFill />
             <NavDropdown title="Room Layouts" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#roomLayouts">View Room Layouts</NavDropdown.Item>
              <NavDropdown.Item href="#addRoomLayout">Add New Room Layout</NavDropdown.Item>
             </NavDropdown>
     
             <FaToolbox />
             <NavDropdown title="Equipment" id="collasible-nav-dropdown">
               <NavDropdown.Item href="#equipments">View Equipments</NavDropdown.Item>
               <NavDropdown.Item href="#addEquipment">Add New Equipment</NavDropdown.Item>
             </NavDropdown>
  
             <FaPizzaSlice />
            <NavDropdown title="Food & Drinks" id="collasible-nav-dropdown">
               <NavDropdown.Item href="#food-drinks">View Food-Drinks</NavDropdown.Item>
               <NavDropdown.Item href="#addFood-Drink">Add New Food-Drink</NavDropdown.Item>
             </NavDropdown>
         
             <HiUsers />
             <Nav.Link href="#users">Users</Nav.Link>
          
          </Nav>
            
           <Nav>
                <GrLogout />
                <Nav.Link href="#logout">Logout</Nav.Link>
           </Nav>

         </Navbar.Collapse>
       </Navbar>

         );
   };

   export default Menubar;
