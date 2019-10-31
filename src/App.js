import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import apiKEY from './config.js';
import axios from 'axios';

// App components
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';
import RouteNotFound from './components/RouteNotFound.js';

class App extends Component {
	state = {
		photos: [],
		loading: true
	};

	componentDidMount = () => {
		this.defaultSearch();
	};

	performSearch = query => {
		this.setState({ loading: true });

		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo, loading: false });
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	};

	defaultSearch = () => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=architecture&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo, loading: false });
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	};

	dogsSearch = () => {
		this.setState({ loading: true });

		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=dogs&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo, loading: false });
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	};

	catsSearch = () => {
		this.setState({ loading: true });

		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=cats&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo, loading: false });
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	};

	lionsSearch = () => {
		this.setState({ loading: true });

		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=lions&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({ photos: response.data.photos.photo, loading: false });
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	};

	render() {
		return (
			<Router>
				<div className="container">
					<SearchForm onSearch={this.performSearch} />
					<Navigation
						onCatsClick={this.catsSearch}
						onDogsClick={this.dogsSearch}
						onLionsClick={this.lionsSearch}
					/>

					<Switch>
						<Route
							exact
							path="/search/:query"
							render={props => (
								<PhotoContainer
									{...props}
									data={this.state.photos}
									loading={this.state.loading}
								/>
							)}
						/>
						<Route
							exact
							path="/"
							render={props => (
								<PhotoContainer
									{...props}
									data={this.state.photos}
									loading={this.state.loading}
								/>
							)}
						/>
						<Route
							path="/dogs"
							render={props => (
								<PhotoContainer
									{...props}
									data={this.state.photos}
									loading={this.state.loading}
								/>
							)}
						/>
						<Route
							path="/cats"
							render={props => (
								<PhotoContainer
									{...props}
									data={this.state.photos}
									loading={this.state.loading}
								/>
							)}
						/>
						<Route
							path="/lions"
							render={props => (
								<PhotoContainer
									{...props}
									data={this.state.photos}
									loading={this.state.loading}
								/>
							)}
						/>
						<Route component={RouteNotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
