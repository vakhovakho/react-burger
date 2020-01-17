import React from 'react';

import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName, 
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #eee',
                boxShadow: '0 1px 2px #ccc',
                padding: '4px 8px'
            }} 
            key={ig.name}>{ig.name} ({ig.amount})</span>
    });

    return (
        <div className={classes.Order}>
            ingredients: {ingredientOutput}
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    );
}

export default order;