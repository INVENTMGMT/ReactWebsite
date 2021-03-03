
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

function Items(props) {
    const { passedItems } = props;
    const items = [];

    const createListItem = (ItemName) => {

        return (
        <ListItem button onClick={() => console.log(ItemName)}>
            <ListItemIcon>
                <DirectionsWalkIcon/>
            </ListItemIcon>
            <ListItemText>
                {ItemName}
            </ListItemText>
        </ListItem>
        )
    };

    passedItems.forEach(element => {
        items.push(createListItem(element));
    });

    return (<>{items}</>)

}


export default Items;
