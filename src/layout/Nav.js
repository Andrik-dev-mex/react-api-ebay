import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<Link to={"/"} className="navbar-brand mb-0 h1">Ebay React Client</Link>
		</nav>
	)
};

export default Nav;