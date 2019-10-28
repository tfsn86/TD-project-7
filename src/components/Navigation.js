import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
	<nav className="main-nav">
		<ul>
			<li>
				<NavLink to={`/cats`} onClick={props.onCatsClick}>
					Cats
				</NavLink>
			</li>
			<li>
				<NavLink to={`/dogs`} onClick={props.onDogsClick}>
					Dogs
				</NavLink>
			</li>
			<li>
				<NavLink to={`/lions`} onClick={props.onLionsClick}>
					Lions
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navigation;
