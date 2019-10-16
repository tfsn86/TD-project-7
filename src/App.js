import React, { Component } from 'react';
import './css/index.css';
import './config.js';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<SearchForm />
				<Navigation />
				<PhotoContainer />
			</div>
		);
	}
}
