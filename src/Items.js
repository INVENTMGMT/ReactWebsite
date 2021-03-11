import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

function Items(props) {
    const { passedItems } = props;
    const items = [];

    const CreateListItem = (id, ItemName, quantity, price) => {
      const [anchorEl, setAnchorEl] = React.useState(null);
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const removeItem = () => {
        /* handle removing an item from the database */
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
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          style={{padding: "10pt"}}
        >
          <Typography><Button onClick={removeItem}> Purchase 1</Button></Typography>
        </Popover>

        </div>
        )
    };

    if (passedItems.length > 0) {
        passedItems.forEach(item => {
            items.push(CreateListItem(item["id"], item["name"], item["quantity"], item["price"]));
        });
    } else {
        items.push("No items matched your query");
    }

    return (<>{items}</>)

}


export default Items;
