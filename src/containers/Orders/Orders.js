import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
//import Order from '../../components/Order/Order';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};

	componentDidMount() {
		// From orders we fetch an object.
		axios
			.get('/orders.json')
			.then((res) => {
				// console.log('Orders: ', res.data);
				//convert the object into an array:
				const fetchedOrders = [];
				for (const key in res.data) {
					// console.log('key ', key)
					// console.log('res.data[key] ', res.data[key])
					if (res.data.hasOwnProperty(key)) {
						fetchedOrders.push({ ...res.data[key], id: key });
					}
				}
				console.log('fetchedOrders ', fetchedOrders);
				this.setState({ loading: false, orders: fetchedOrders });
			})
			.catch((err) => {
				this.setState({ loading: false });
			});
	}

	render() {
		// I obviously want to output multiple orders,
		// actually as many orders as needed and the orders I need to output
		// of course should be fetched from the backend.
		return (
			<div>
				{this.state.orders.map((orders) => (
					// Do this: price={+order.price} so the toFixed(2) will work in Order.js
					<Order
						key={orders.id}
						ingredients={orders.ingredients}
						price={orders.price}
						delivery={orders.deliveryMethod}
						name={orders.customer.name}
					/>
				))}
			</div>
		);
	}
}

export default withErrorHandler(Orders, axios);
