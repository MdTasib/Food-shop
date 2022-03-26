import React from "react";
import logo from "../../images/vegetable.png";
import cart from "../../images/cart.png";

const Header = () => {
	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<div className='container'>
					<a className='navbar-brand d-flex align-items-center' href='/'>
						<img src={logo} alt='logo' width='60' />
						<span className='ms-3 fw-bold'>
							FOOD <span className='text-warning'>SHOP</span>{" "}
						</span>
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='/'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Product
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Contact
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									<img src={cart} alt='' width='30' height='30' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<h3 className='text-center'>SELECT ONLY 4 ITEMS</h3>
		</header>
	);
};

export default Header;
