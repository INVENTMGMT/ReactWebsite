import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import backendFunction from './functions/backendFunction';

function Item(props) {

  const { id, name, quantity, price, removeItem, transact } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [amount, setAmount] = React.useState(quantity);
  const [itemDisplay, setItemDisplay] = React.useState("inline");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{display: `${itemDisplay}`}}>
      <ListItem key={id} button onClick={handleClick}>
        <ListItemText style={{display:'flex', justifyContent:'start'}}>
          SKU: {id}
        </ListItemText>
        <ListItemText style={{display:'flex', justifyContent:'start'}}>
          {name.charAt(0).toUpperCase() + name.substring(1)}
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
          <h1>{name.charAt(0).toUpperCase() + name.substring(1)}</h1>
          <p>
            You are looking at
            {" " + name.charAt(0).toUpperCase() + name.substring(1)}.
            You can edit its details with the controls below.
          </p>
          <TextField
            name="amountToRemove"
            placeholder="Name"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={event => setAmount(event.target.value)}
            placeholder="Amount"
          />
          <Button onClick={ () => {transact(id, name, price, amount); setAnchorEl(null);}}>Transact</Button>
          <Button onClick={ () => {removeItem(id); setAnchorEl(null);}}>Remove From Inventory</Button>
        </Typography>

      </Popover>

    </div>
  )
}

export default Item;
