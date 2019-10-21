import React from 'react';

const Photo = props => {
	return (
		<li>
			<img src={props.url} alt={props.title} key={props.id} />
		</li>
	);
};

export default Photo;
