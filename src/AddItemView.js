import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { withStyles } from "@material-ui/core/styles";
import ContactsIcon from "@material-ui/icons/Contacts";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import backendFunction from "./functions/backendFunction";
import Items from "./Items";

const styles = (theme) => ({
  paper: {
    width: '80%',
    margin: "auto",
    marginTop: "5%",
    overflow: "hidden",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: "40px 16px",
  },
});

function AddItemView(props) {
  const { classes } = props;

  const clearFields = () => {
    setName("");
    setPrice("");
    setQt("");
  };

  const [addedItems, addItem] = React.useState([]);

  const handleAdd = (itemName, itemPrice, itemQuantity) => {
    try {
      backendFunction("addItem", {
        id: Math.floor(Math.random() * 100),
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
      })
        .then((resp) => {
          addItem([resp.data["data"]["addItem"], ...addedItems]);
        })
        .catch((error) => {
          const response = error.response;
          addItem([{'name': response.data.errors[0].message}, ...addedItems])
          response.data.errors.forEach((err) => {
            console.log("ERROR ADDING ITEM: " + err.message);
          });
        });
    } catch (error) {
      alert("Error: Missing required parameters");
      console.error(error.name + ": " + error.message);
    }
  };

  const [addName, setName] = React.useState("");
  const [addPrice, setPrice] = React.useState("");
  const [addQt, setQt] = React.useState("");

  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <ContactsIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Name"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                value={addName}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid>
              <MonetizationOnIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Price"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                value={addPrice}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </Grid>
            <Grid>
              <FormatListNumberedIcon
                className={classes.block}
                color="inherit"
              />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Quantity"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                value={addQt}
                onChange={(event) => {
                  setQt(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => handleAdd(addName, addPrice, addQt)}
                color="primary"
                className={classes.addUser}
              >
                ADD ITEM
              </Button>
              <Button
                variant="contained"
                onClick={() => clearFields()}
                color="primary"
                className={classes.addUser}
              >
                CLEAR
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          <Items passedItems={addedItems} />
        </Typography>
      </div>
    </Paper>
  );
}

AddItemView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddItemView);
