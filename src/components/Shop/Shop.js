import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";

const Shop = () => {
	const [foods, setFoods] = useState([]);
	const [selectedFood, setSelectedFood] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then(response => response.json())
			.then(data => setFoods(data));
	}, []);

	const handleAddToCart = food => {
		const newSelectedFood = [...selectedFood, food];
		setSelectedFood(newSelectedFood);
	};

	return (
		<div className='row container py-4'>
			<div className='col-md-10'>
				<div className='row'>
					{foods.map(food => (
						<Food key={food.id} food={food} handleAddToCart={handleAddToCart} />
					))}
				</div>
			</div>
			<div className='col-md-2 py-3'>
				<Cart selectedFood={selectedFood} />
			</div>
		</div>
	);
};

export default Shop;
