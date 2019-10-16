import React, { Component } from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

export default class PhotoContainer extends Component {
	state = {};

	render() {
		return (
			<div className="photo-container">
				<h2>Results</h2>
				<ul>
					<Photo />
					<NotFound />
				</ul>
			</div>
		);
	}
}
