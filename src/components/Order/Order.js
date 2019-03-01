import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
	const ingredients = [];
	for (let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName]
		});
	}

	const indredientOutput = ingredients.map((ig) => {
		return (
			<span
				style={{
					textTransform: 'capitalize',
					display: 'inline-block',
					margin: '0 8px',
					border: '1px solid #ccc',
					padding: '5px'
				}}
				key={ig.name}
			>
				{ig.name} ({ig.amount})
			</span>
		);
	});

	return (		
		<div className={classes.Order}>
			<p> Hey {props.name}, thank you for your order!</p>
			<p>Ingredients: {indredientOutput} </p>
			<p>DeliveryMethod: {props.delivery} </p>
			{/* Use Number.parseFloat() to convert the string to a number...
        or use a '+' where you load the <Order /> in the Orders.js */}

			<p>
				Price <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>{' '}
			</p>
		</div>
	);
};

export default order;
