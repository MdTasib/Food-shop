import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";

const Shop = () => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then(response => response.json())
			.then(data => setFoods(data));
	}, []);

	return (
		<div className='row container py-4'>
			<div className='col-md-10'>
				<div className='row'>
					{foods.map(food => (
						<Food key={food.id} food={food} />
					))}
				</div>
			</div>
			<div className='col-md-2'>
				<Cart />
			</div>
		</div>
	);
};

export default Shop;
