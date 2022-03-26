import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";

const Shop = () => {
	const [foods, setFoods] = useState([]);
	const [selectedFood, setSelectedFood] = useState([]);
	const [chooseFood, setChosseFood] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then(response => response.json())
			.then(data => setFoods(data));
	}, []);

	const handleAddToCart = food => {
		const newSelectedFood = [...selectedFood, food];
		setSelectedFood(newSelectedFood);
	};

	const handleChooseFood = () => {
		let randomIndex = Math.round(Math.random() * selectedFood.length - 1);
		if (randomIndex < 0 || randomIndex === -0) {
			randomIndex += 1;
		}
		setChosseFood(selectedFood[randomIndex]);
	};

	const handleSelectedAgain = () => {
		setSelectedFood([]);
		setChosseFood([]);
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
				<Cart
					selectedFood={selectedFood}
					handleChooseFood={handleChooseFood}
					handleSelectedAgain={handleSelectedAgain}
					chooseFood={chooseFood}
				/>
			</div>
		</div>
	);
};

export default Shop;
