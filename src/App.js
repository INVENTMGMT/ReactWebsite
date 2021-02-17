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

function App() {
  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <>
      <SearchAppBar />
      <Grid container justify="center">
        <Paper>    
        <Grid item>
          {/* The list will be generated using a different component, this is hard coding for now */}
          <List component="nav" aria-label="items">
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Item 1"/>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Item 2"/>
            </ListItem>
          </List>
        </Grid>
        </Paper>
        <Grid item>
          <Button variant="contained" color="primary"/>
        </Grid>
      </Grid>
    </>
  );
}


export default App;

