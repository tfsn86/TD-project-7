import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import apiKEY from './config.js';
import axios from 'axios';

// App components
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			photos: []
		};
	}

	componentDidMount = () => {
		this.performSearch();
	};

	performSearch = (query = 'cats') => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo });
				// handle success
			})
			.catch(error => {
				// handle error
				console.log('Error fetching and parsing data', error);
			});
		/* .finally(function() {
      // always executed
    }) */
	};

	render() {
		return (
			<Router>
				<div className="container">
					<Navigation />
					<SearchForm onSearch={this.performSearch} />
					<PhotoContainer data={this.state.photos} />
				</div>
			</Router>
		);
	}
}
