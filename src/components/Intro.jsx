import React, { Component } from 'react';

export default class Intro extends Component {
	render() {
		return (
			<div id="intro">
				<h1>
					Hi, I'm Cris
				</h1>
				<p>
					I'm a web developer from Buenos Aires, Argentina.
				</p>
				<ul className="actions">
					<li><a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
				</ul>
			</div>
		);
	}
}
