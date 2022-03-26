import React from "react";
import cartIcon from "../../images/shopping-cart.png";

const Food = ({ food }) => {
	const { name, img, price } = food;

	return (
		<div className='col-md-4 g-3'>
			<div className='card h-100'>
				<img src={img} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title text-warning fw-bold'>{name}</h5>
					<p className='card-text'>
						<strong>Price :</strong> {price}
					</p>
				</div>
				<div className='card-footer p-0'>
					<button className='btn btn-outline-warning w-100 rounded-0 fw-bold'>
						ADD TO CART{" "}
						<img className='ms-3' src={cartIcon} width='25' alt='' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Food;
