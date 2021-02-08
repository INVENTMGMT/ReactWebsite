import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import SearchAppBar from './SearchBar';

function App() {
  return (
    <>
    <SearchAppBar />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </>
  );
}


export default App;
