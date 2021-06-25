import * as React from 'react';
import {Item} from "../../types";
import './ShoppingListItem.css';

const ShoppingListItem = (props: {item: Item}) => {
    return (
        <div className="card">
            <img alt={props.item.name} src={props.item.image} className="image"/>
            <div className="details">
                <h2>
                    {props.item.name}
                </h2>
                <h3>
                    {props.item.category}
                </h3>
            </div>
        </div>
    )
};

export default ShoppingListItem;
