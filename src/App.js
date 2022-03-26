import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then(res => res.json())
			.then(data => setFoods(data));
	}, []);

	console.log(foods);

	return (
		<div className='App'>
			{foods.map(food => (
				<>
					<h4>{food.name}</h4>
					<img src={food.img} alt='' />
				</>
			))}
		</div>
	);
}

export default App;
