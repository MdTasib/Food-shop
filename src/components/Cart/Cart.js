import React from "react";
import deleteIcon from "../../images/delete.png";

const Cart = ({ selectedFood }) => {
	return (
		<div className='card border-light border-3' style={{ width: "19rem" }}>
			<h6 className='card-header bg-white'>Selected Foods</h6>
			<div className='card-body'>
				<div className='mb-3'>
					{selectedFood.map(food => (
						<div className='d-flex justify-content-between py-2' key={food.id}>
							<img src={food.img} width='30' height='30' alt='' />
							<small className='fw-bold ms-3'>{food.name}</small>
							<img
								className=''
								src={deleteIcon}
								width='30'
								height='30'
								alt=''
							/>
						</div>
					))}
				</div>
				<button className='btn btn-outline-warning fw-bold mb-2 w-100'>
					Chosse 1 For Me
				</button>
				<button className='btn btn-warning fw-bold w-100'>Choose Again</button>
			</div>
		</div>
	);
};

export default Cart;
