import React from "react";

const Footer = () => {
	return (
		<div className='container-fluid py-4'>
			<h3 className='text-center py-3 text-warning'>QUESTION</h3>
			<div className='accordion' id='accordionExample'>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingOne'>
						<button
							className='accordion-button text-warning'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='true'
							aria-controls='collapseOne'>
							How React Work ?
						</button>
					</h2>
					<div
						id='collapseOne'
						className='accordion-collapse collapse show'
						aria-labelledby='headingOne'
						data-bs-parent='#accordionExample'>
						<div className='accordion-body'>
							React is a JavaScript library for building user interfaces. React
							uses a declarative paradigm that makes it easier to reason about
							your application and aims to be both efficient and flexible. It
							designs simple views for each state in your application, and React
							will efficiently update and render just the right component when
							your data changes. At its very core, React basically maintains a
							tree for you. This tree is able to do efficient diff computations
							on the nodes.
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingTwo'>
						<button
							className='accordion-button collapsed text-warning'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'>
							Props VS State
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse'
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'>
						<div className='accordion-body'>
							<strong>State :</strong>
							<ul>
								<li>State are mutable.</li>
								<li>You can define states in the component itself.</li>
								<li>The state is set and updated by the object.</li>
							</ul>
							<strong>Props :</strong>
							<ul>
								<li>Props are immutable.</li>
								<li>You can pass properties from parent components</li>
								<li>
									Determine the view upon creation, and then they remain static.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
