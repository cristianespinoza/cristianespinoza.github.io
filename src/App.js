import React, { Component } from 'react';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<div id="wrapper" className="fade-in">
				<Intro />
				<Header />
				<Nav />
				<Main />
				<Footer />
			</div>
		);
	}
}
