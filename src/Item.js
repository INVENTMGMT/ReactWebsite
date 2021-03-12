import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Item(props) {
  const { id, ItemName, quantity, price } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [amount, setAmount] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeItem = (event) => {
    console.log(`Submitting ${amount}`);
    setAmount(0);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <ListItem key={id} button onClick={handleClick}>
        <ListItemText style={{display:'flex', justifyContent:'start'}}>
          {ItemName}
        </ListItemText>
        <ListItemText style={{display:'flex', justifyContent:'center'}}>
          Quantity: {quantity}
        </ListItemText>
        <ListItemText style={{display:'flex', justifyContent:'flex-end'}}>
          Price: ${price}
        </ListItemText>
      </ListItem> 
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference={"none"}
        style={{width: "500pt", paddingTop: "10%", margin: 'auto'}}
      >
        <Typography style={{ padding: "10pt"}}>
          <h1>{ItemName}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <TextField
            name="amountToRemove"
            placeholder="Name"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={event => setAmount(event.target.value)}
            placeholder="Amount"
          />
          <Button onClick={removeItem}>Pull from inventory</Button>
        </Typography>
      </Popover>

    </div>
  )


}
