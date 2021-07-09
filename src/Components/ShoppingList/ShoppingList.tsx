import * as React from "react";
import {Item} from "../../types";
import ShoppingListItem from "./ShoppingList.Item";
import './ShoppingList.css';

const ShoppingList = (props: {items: Item[]}) => {

    const [search, setSearch] = React.useState('');

    if (props.items.length > 0) {
        const filteredItems = props.items.filter(item => item.name.toLowerCase().includes(search));

        return (
            <div>
                <header className="header">
                    <h1 className="title">Your amazing shopping list!</h1>
                    <div className="searchBox">
                        <label>Search: </label>
                        <input value={search} onChange={event => setSearch(event.target.value)}/>
                    </div>
                </header>
                <body>
                    {filteredItems.map(item => <ShoppingListItem item={item}/>)}
                </body>
            </div>
        )
    } else {
        return <h2>No items :shrug:</h2>
    }

};

export default ShoppingList;
