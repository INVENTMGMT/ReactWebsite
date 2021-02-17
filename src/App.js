import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import SearchAppBar from './SearchBar';
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';


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
    padding: theme.spacing(10),
    backgroundColor:'#EDFCFF',
    height: 630,
    borderRadius: 35,
  },
  paperInfo:{
    padding: theme.spacing(10),
    backgroundColor: '#0077B6',
    height: 200,
    borderRadius: 35,
  },
  topBarButton:{
    backgroundColor:'#EDFCFF',
    textAlign: 'center',
    color: '#2541B2',
    borderRadius: 35,
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


  const handleClick = () => {
    console.log("clicked");
  }

  document.body.style = "background: '#EDFCFF';";
  const classes = useStyles();
  return (
    <body style={{background: "#EDFCFF"}}>
    <div className={classes.root}>
      <Grid container spacing={5}>

        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperTopBar}>

          <Grid container>
            <Grid item xs={3}>
              <BootstrapButton variant="contained" className={classes.margin}>
                ADD PRODUCT
              </BootstrapButton>
            </Grid>

            <Grid item xs={3}>
              <BootstrapButton variant="contained" className={classes.margin}>
                SHIPMENTS
              </BootstrapButton>
            </Grid>

            <Grid item xs={3}>
              <BootstrapButton variant="contained" className={classes.margin}>
                STATISTICS
              </BootstrapButton>
            </Grid>

            <Grid item xs={3}>
              <BootstrapButton variant="contained" className={classes.margin}>
                ACCOUNT
              </BootstrapButton>
            </Grid>
          </Grid>

          </Paper>
        </Grid>

        <Grid item xs={8} spacing={5} alignItems="center">
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperItems}>Top Bar</Paper>
          </Grid>
        </Grid>

        <Grid container xs={4} spacing={5} alignItems="center">
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperInfo}>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperInfo}>
            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </div>
    </body>
  );
}


export default App;
