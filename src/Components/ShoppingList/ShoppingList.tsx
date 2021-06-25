import * as React from "react";
import {Item} from "../../types";
import ShoppingListItem from "./ShoppingList.Item";

const ShoppingList = (props: {items: Item[]}) => {
    if (props.items.length > 0) {
        const items = props.items.map(item => <ShoppingListItem item={item}/>);
        return (
            <div>
                {items}
            </div>
        )
    } else {
        return <h2>No items :shrug:</h2>
    }

};

export default ShoppingList;
