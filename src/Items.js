
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

function Items() {
    const items = [];

    const createListItem = (ItemName) => {
        
        return <ListItem button onClick={() => console.log(ItemName)}>
            <ListItemIcon>
                <DirectionsWalkIcon/>
            </ListItemIcon>
            <ListItemText>
                {ItemName}
            </ListItemText>
        </ListItem>
    };


    for (let i = 0; i < 20; i++) {
        items.push(createListItem(i));
    }


    return (<>{items}</>)

}


export default Items;