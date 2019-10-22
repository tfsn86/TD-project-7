import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
			photos: [],
			dogs: [],
			cats: [],
			lions: []
		};
	}

	componentDidMount = () => {
		this.performSearch();
		this.dogsSearch();
		this.catsSearch();
		this.lionsSearch();
	};

	performSearch = query => {
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

	dogsSearch = () => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=dogs&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ dogs: response.data.photos.photo });
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

	catsSearch = () => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=cats&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ cats: response.data.photos.photo });
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

	lionsSearch = () => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=lions&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ lions: response.data.photos.photo });
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
					<SearchForm onSearch={this.performSearch} />
					<Navigation />
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<PhotoContainer data={this.state.photos} title="Results" />
							)}
						/>
						<Route
							path="/dogs"
							render={() => (
								<PhotoContainer data={this.state.dogs} title="Dogs" />
							)}
						/>
						<Route
							path="/cats"
							render={() => (
								<PhotoContainer data={this.state.cats} title="Cats" />
							)}
						/>
						<Route
							path="/lions"
							render={() => (
								<PhotoContainer data={this.state.lions} title="Lions" />
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}
