import React, {Fragment, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import {Modal, Button} from "react-bootstrap";
import {AiFillInfoCircle} from "react-icons/ai";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './style.css';

//custom data
const products = [{'id': 1, 'room': "Small Conference Room", 'date': "08-06-2018", 'name': "Mallory Norman",  'total': 545.60, 'status': "Confirmed"},
{'id': 2, 'room': "Large Conference Room", 'date': "09-06-2018", 'name': "Dorothy Jacobs",  'total': 645.60, 'status': "Confirmed"},
{'id': 3, 'room': "Panoramic Room", 'date': "08-07-2018", 'name': "Himaja",  'total': 445.20, 'status': "Pending"},
{'id': 4, 'room': "Small Conference Room", 'date': "08-10-2018", 'name': "Deepak",  'total': 345.60, 'status': "Confirmed"},
{'id': 5, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 6, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 7, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 8, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 9, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 10, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 11, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 12, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 13, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 14, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 15, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 16, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"},
{'id': 17, 'room': "Large Conference Room", 'date': "18-06-2018", 'name': "Shubha",  'total': 245.60, 'status': "Pending"}];


const { SearchBar } = Search;

const customTotalPagination = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
      &ensp;&ensp;Showing: { from } - { to } / { size }
  </span>
);

function priceFormatter(cell, row) {
  return `$ ${cell}`;
}

const Example = (props) => {

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
  dataField: 'room',
  text: 'Room',
  editable: false, 
}, {
  dataField: 'date',
  text: 'Date',
  editable: false,
  sort: true,
  sortFunc: (a, b, order, dataField, rowA, rowB) => { 
    var date_a = a.split("-");
    var date_b = b.split("-");
    
    if (order === 'asc')
    {
      return new Date(date_a[2], date_a[1], date_a[0]) - new Date(date_b[2], date_b[1], date_b[0])
    }
   else if (order === 'desc') {
      return  new Date(date_b[2], date_b[1], date_b[0]) - new Date(date_a[2], date_a[1], date_a[0])
    }
}
}, {
  dataField: 'name',
  text: 'Name',
  sort: true,
  editable: false
},
{
    dataField: 'total',
    formatter: (cell, row) => `$ ${cell}`,
    text: 'Total',
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
            value: 'Pending',
            label: 'Pending'
          }, {
            value: 'Confirmed',
            label: 'Confirmed'
          }];
        }
      }
},{
  dataField: "id",
    text: "Delete",
    editable: false,
  formatter: (cellContent, row) => {
    return (
      <Example cellContent={cellContent} row={row}/>
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
          placeholder="Search for Room/ Name/ Date"
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
