import React, {Fragment, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import {Modal, Button, Image} from "react-bootstrap";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './style.css';
import logo from './largeConference.jpg';

//custom data
const products = [{'id': 1, 'image': '../../images/rooms/smallConference.jpg', 'room': "Small Conference Room 0", 'capacity': 5, 'bookings': 1, 'status': "Active"},
{'id': 2, 'image': '../../images/rooms/largeConference.jpg', 'room': "Large Conference Room 0", 'capacity': 12, 'bookings': 1, 'status': "Active"},
{'id': 3, 'image': '../../images/rooms/smallConference.jpg', 'room': "Small Conference Room 1", 'capacity': 6, 'bookings': 2, 'status': "Inactive"},
{'id': 4, 'image': '../../images/rooms/largeConference.jpg', 'room': "Large Conference Room 1", 'capacity': 20, 'bookings': 1, 'status': "Active"},
{'id': 5, 'image': '../../images/rooms/panoramic.jpg', 'room': "Panorama Room 0", 'capacity': 25, 'bookings': 2, 'status': "Inactive"},
{'id': 6, 'image': '../../images/rooms/smallConference.jpg', 'room': "Small Conference Room 2", 'capacity': 8, 'bookings': 1, 'status': "Inactive"},
{'id': 7, 'image': '../../images/rooms/smallConference.jpg', 'room': "Small Conference Room 3", 'capacity': 7, 'bookings': 2, 'status': "Active"},
{'id': 8, 'image': '../../images/rooms/largeConference.jpg', 'room': "Large Conference Room 2", 'capacity': 18, 'bookings': 1, 'status': "Active"},
{'id': 9, 'image': '../../images/rooms/smallConference.jpg', 'room': "Small Conference Room 4", 'capacity': 6, 'bookings': 3, 'status': "Inactive"},
{'id': 10, 'image': '../../images/rooms/smallConference.jpg', 'room': "Small Conference Room 5", 'capacity': 5, 'bookings': 1, 'status': "Active"}
];


const { SearchBar } = Search;

const customTotalPagination = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
      &ensp;&ensp;Showing: { from } - { to } / { size }
  </span>
);

function imageFormatter(cell, row) {
  console.log(logo);
    return (
     // <Image src= '../../images/rooms/largeConferene.jpg/171x180' thumbnail/>
     <Image src={logo} thumbnail />
     );
}


const DeleteRow = (props) => {

  const [show, setShow] = useState(false);

  const handleConfirm = () => 
  {
    console.log(props.cellContent, props.row);
    setShow(false);
  }

  const handleShow = () => setShow(true);
  const handleCancel = () => setShow(false);

  return (
    <>
      <Button className="btn btn-secondary btn-xs" onClick={handleShow}>
        x
      </Button>

      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Row Deletion Triggered</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


const options = {
  paginationSize: 4,
  pageStartIndex: 1,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: '<<',
  nextPageText: '>>',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotalPagination,
  disablePageTitle: true,
  sizePerPageList: [{
    text: '3', value: 3
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: products.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};

const columns = [{
  dataField: 'image',
  text: 'Image',
  formatter: imageFormatter,
  editable: false, 

},  {
  dataField: 'room',
  text: 'Room',
  sort: true,
  editable: false,
}, {
    dataField: 'capacity',
    text: 'Capacity',
    sort: true,
    editable: false,
    searchable: false

}, {
  dataField: 'bookings',
  text: 'Bookings',
  sort: true,
  editable: false,
  searchable: false

}, {
    dataField: 'status',
    text: 'Status',
    sort: true,
    searchable: false,
    editor: {
        type: Type.SELECT,
        getOptions: (setOptions, { row, column }) => {
          console.log(`current editing row id: ${row.id}`);
          console.log(`current editing column: ${column.dataField}`);
          return [{
            value: 'Inactive',
            label: 'Inactive'
          }, {
            value: 'Active',
            label: 'Active'
          }];
        }
      }
},{
  dataField: "id",
    text: "Delete",
    editable: false,
  formatter: (cellContent, row) => {
    return (
      <DeleteRow cellContent={cellContent} row={row}/>
    );
  }
}];

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];


export default () =>
  <ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search>
  {
    props => (
      <div>
        <SearchBar
          { ...props.searchProps }
          className="custome-search-field"
          style={ { color: 'black' }, {width: '500px'} }
          delay={ 1000 }
          placeholder="Search for Room"
        />
        <hr />
        <BootstrapTable 
          { ...props.baseProps }
          bootstrap4 cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true })} defaultSorted={ defaultSorted } pagination={ paginationFactory(options) } striped hover
        >
        </BootstrapTable>
      </div>
    )
  }
 </ToolkitProvider>
