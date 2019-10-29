import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
	render() {
		let loadingPage = this.props.loading;
		if (loadingPage) {
			return <h1>Loading...</h1>;
		}

		const results = this.props.data;
		let photos;
		if (results.length > 0) {
			photos = results.map(photo => (
				<Photo
					key={photo.id}
					url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
					alt={photo.title}
				/>
			));
		} else {
			photos = <NotFound />;
		}

		return (
			<div className="photo-container">
				<h2>Results</h2>
				<ul>{photos}</ul>
			</div>
		);
	}
}

export default PhotoContainer;
