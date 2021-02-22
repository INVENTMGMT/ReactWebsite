import React from "react";
import Grid from "@material-ui/core/Grid";

function SearchBox(props) {
  const { submitFunc, clearFunc, BootstrapButton } = props;

  return (
    <>
      {/* Title grid */}
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} alignItems="center">
          <span style={{ color: "white" }}>SEARCH ITEMS</span>
          <br />
          <br />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      {/* Grid for input about SKU, Name, and Out of Stock button */}
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={3} textAlign="left">
          <label for="SKU">
            <span style={{ color: "white" }}>SKU</span>
            <br />
            <br />
          </label>
          <label for="Name">
            <span style={{ color: "white" }}>NAME</span>
            <br />
            <br />
          </label>
          <label for="OOS">
            <span style={{ color: "white" }}>INCLUDE OUT OF STOCK</span>
            <br />
            <br />
          </label>
        </Grid>
        <Grid item xs={3}>
          <input type="text" id="SKU" label="SKU" variant="filled" />
          <br />
          <br />
          <input
            color="white"
            type="text"
            id="Name"
            label="Name"
            variant="filled"
          />
          <br />
          <br />
          <input type="checkbox" id="OOS" label="OOS" value="Yes" />
          <br />
          <br />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      {/* Grid for Clear and Submit Buttons */}
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <BootstrapButton
            variant="contained"
            onClick={clearFunc}
          >
            CLEAR
          </BootstrapButton>
        </Grid>
        <Grid item xs={3}>
          <BootstrapButton
            variant="contained"
            onClick={submitFunc}
          >
            SUBMIT
          </BootstrapButton>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchBox;
