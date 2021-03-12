import React from 'react';
import Item from './Item';

function Items(props) {
    const { passedItems, removeFunc, transactFunc } = props;
    const items = [];


    if (passedItems.length > 0) {
        passedItems.forEach(item => {
            items.push(<Item id={item.id} name={item.name}
              quantity={item.quantity} price={item.price} removeItem={removeFunc} transact={transactFunc}/>
            )
        });
    } else {
        items.push("No items matched your query");
    }

    return (<>{items}</>)

}


export default Items;
