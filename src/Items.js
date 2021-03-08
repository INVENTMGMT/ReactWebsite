
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

function Items(props) {
    const { passedItems } = props;
    const items = [];

    const createListItem = (id, ItemName) => {

        return (
        <ListItem key={id} button onClick={() => console.log(ItemName)}>
            <ListItemIcon>
                <DirectionsWalkIcon/>
            </ListItemIcon>
            <ListItemText>
                {ItemName}
            </ListItemText>
        </ListItem>
        )
    };

    if (passedItems.length > 0) {
        passedItems.forEach(item => {
            items.push(createListItem(item["id"], item["name"]));
        });
    } else {
        items.push("No items matched your query");
    }

    return (<>{items}</>)

}


export default Items;
