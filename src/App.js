import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Items from './Items';
import SearchBox from './SearchBox';
import Popover from '@material-ui/core/Popover';
import Header from './Header'
import Content from './Content'
import Navigator from './Navigator'
import Paperbase from './Paperbase'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  paperTopBar: {
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: '#2541B2',
    color: '#FFFFFF',
    borderRadius: 35,
    alignItems: "center",
  },
  paperItems:{
    textAlign: 'center',
    alignItems: 'center',
    padding: theme.spacing(10),
    backgroundColor:'#EDFCFF',
    height: 1000,
    borderRadius: 35,
  },
  paperInfo:{
    padding: theme.spacing(10),
    backgroundColor: '#0077B6',
    height: 200,
    borderRadius: 35,
  },
  list:{
    height: 175,
  },
}));


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#EDFCFF',
    color: '#2541B2',
    borderRadius: 35,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: '#FF0000',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,180,216,.5)',
    },
  },
})(Button);


function App() {

  const [items, setItems] = useState([1,2,3]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const clearSearch = () => {
    document.getElementById("SKU").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("OOS").checked = false;
  };

  const submitSearch = () => {
    /* This should probably be changed so we're not searching the document, but instead getting it from the input tags */
    var sku = document.getElementById("SKU").value;
    var name = document.getElementById("Name").value;
    var oos = document.getElementById("OOS");
    setItems(["HERE", "ARE", "THE", "ITEMS", name]);
    /* ENDPOINT FOR SEARCH FUNCTION */
    axios.get('http://localhost:3000/endpoint')
      .then( res => {
        console.log(res);
        const resItems = res.data.items;
        setItems(resItems);
      })

    alert(
      'SKU: ' + sku + '\n' +
      'Name: ' + name + '\n' +
      'Inlc Out of Stock: ' + oos.checked
    );
 };

  const open = Boolean(anchorEl);
  const id = open ? 'ADDPOPOVER' : undefined;
  const closePopover = () => {setAnchorEl(null);};
  const addProduct = (event) => {
    /* This should be called from a popover view that asks for item name and price  */
  };

  const appearPopover = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const shipments = () => {
    alert('SHIPMENTS');
  };

  const statistics = () => {
    alert('STATISTICS');
  };

  const account = () => {
    alert('ACCOUNT');
  };

  const classes = useStyles();

  return (
    <div>
      <Paperbase />
    </div>
  );
}


export default App;
