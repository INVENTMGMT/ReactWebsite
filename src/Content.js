import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { withStyles } from '@material-ui/core/styles';
import ContactsIcon from '@material-ui/icons/Contacts';
import Items from './Items';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import backendFunction from './functions/backendFunction';

const styles = (theme) => ({
  paper: {
    width: '80%',
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});




function Content(props) {
  const { classes } = props;

  const [state, setState] = React.useState({
    oos: false,
  });

  const [itemName, setItemName] = React.useState('');
  const [itemSKU, setItemSKU] = React.useState('');

  const [items, setItems] = React.useState([{'name': "Pot", "price": "12", "quantity":"2"}]);


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const clearFields = () => {
    setItemName('');
    setItemSKU('');
    setState(false);
  };

  const handleSearch = (name, sku, checkbox) => {
    /* make search query and query the backend */
    try {
      backendFunction("getByName", {name})
        .then(resp =>
          setItems(resp.data["data"]["getByName"]))
    } catch (error) {
      alert("Error: Missing Name parameter");
      console.error(error.name + ": " + error.message);
    }
  };

  const { oos } = state;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <ContactsIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                id = "contentSearchName"
                placeholder="Name"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                value = {itemName}
                onChange = {(event) => {setItemName(event.target.value)}}
              />
            </Grid>
            <Grid>
              <FormatListNumberedIcon className={classes.block} color="inherit"/>
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                id = "contentSearchSKU"
                placeholder="SKU#"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                value = {itemSKU}
                onChange = {(event) => {setItemSKU(event.target.value)}}
              />
            </Grid>
            <Grid item xs>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control=
                    {<Checkbox checked={oos} 
                    onChange={handleChange} name="oos" color="primary"/>}
                    label="Include Out Of Stock"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <Button 
                variant="contained" 
                onClick = {() => {handleSearch(itemName, itemSKU, state);}} 
                color="primary" 
                className={classes.addUser}>
                SEARCH
              </Button>
              <Button variant="contained" onClick = {() => {clearFields()}} color="primary" className={classes.addUser}>
                CLEAR
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          <Items passedItems={items} />
        </Typography>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
