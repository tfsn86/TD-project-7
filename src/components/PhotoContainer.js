import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {
	const results = props.data;
	let photos = results.map(photo => (
		<Photo
			key={photo.id}
			url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
			alt={photo.title}
		/>
	));

	return (
		<div className="photo-container">
			<h2>Results</h2>
			<ul>{photos}</ul>
		</div>
	);
};

export default PhotoContainer;
