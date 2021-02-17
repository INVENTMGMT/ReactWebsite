import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Items from './Items';



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

  const clearSearch = () => {
    document.getElementById("SKU").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("OOS").checked = false;
  };

  const submitSearch = () => {
    var sku = document.getElementById("SKU").value;
    var name = document.getElementById("Name").value;
    var oos = document.getElementById("OOS");
    alert(
      'SKU: ' + sku + '\n' +
      'Name: ' + name + '\n' +
      'Inlc Out of Stock: ' + oos.checked
    );
 };

  const addProduct = () => {
    alert('ADD PRODUCT');
  };

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
    <body style={{background: "#EDFCFF"}}>
    <div className={classes.root}>
      <Grid container spacing={5}>

        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperTopBar}>

          <Grid container>
            <Grid item xs={3}>
              <BootstrapButton variant="contained" onClick={() => {addProduct()}}>
                ADD PRODUCT
              </BootstrapButton>
            </Grid>

            <Grid item xs={3}>
              <BootstrapButton variant="contained" onClick={() => {shipments()}}>
                SHIPMENTS
              </BootstrapButton>
            </Grid>

            <Grid item xs={3}>
              <BootstrapButton variant="contained" onClick={() => {statistics()}}>
                STATISTICS
              </BootstrapButton>
            </Grid>

            <Grid item xs={3}>
              <BootstrapButton variant="contained" onClick={() => {account()}}>
                ACCOUNT
              </BootstrapButton>
            </Grid>
          </Grid>

          </Paper>
        </Grid>

        <Grid item xs={8} spacing={5} alignItems="center">
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperItems}>
              <List className={classes.list}>
                <Items/>
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Grid container xs={4} spacing={5} alignItems="center">
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperInfo}>

              <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} alignItems="center">
                  <span style={{color: "white"}}>
                    SEARCH ITEMS
                  </span><br /><br />
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>

              <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={3} textAlign="left">
                  <label for="SKU">
                    <span style={{color: "white"}}>SKU</span>
                  </label><br/><br/>
                  <label for="Name">
                    <span style={{color: "white"}}>NAME</span>
                  </label><br /><br />
                  <label for="OOS">
                    <span style={{color: "white"}}>
                      INCLUDE OUT OF STOCK
                    </span>
                  </label><br /><br />
                </Grid>
                <Grid item xs={3}>
                  <input type="text" id="SKU" label="SKU" variant="filled"/><br /><br />
                  <input color="white" type="text" id="Name" label="Name" variant="filled"/><br /><br />
                  <input type="checkbox" id="OOS" label="OOS" value="Yes" /><br /><br />
                </Grid>
                <Grid item xs={3}>
                </Grid>

              </Grid>
              <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                  <BootstrapButton variant="contained" onClick={() => {clearSearch()}}>
                    CLEAR
                  </BootstrapButton>
                </Grid>
                <Grid item xs={3}>
                  <BootstrapButton variant="contained" onClick={() => {submitSearch()}}>
                    SUBMIT
                  </BootstrapButton>
                </Grid>
              </Grid>

            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperInfo}> {/* This is the blue box on the bottom right*/}
            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </div>
    </body>
  );
}


export default App;
