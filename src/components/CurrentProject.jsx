import React, { Component } from 'react';

export default class CurrentProject extends Component {
	render() {
		return (
			<article className="post">
				<h2>Current project</h2>
				<a href="https://appdirect.com" className="image main"><img src="static/images/pic01.jpg" alt="" /></a>
				<h2>Front-End engineer @ AppDirect inc.</h2>
				<p>
					I'm part of the AppMarket and AppReseller teams in Buenos Aires,
					I develop features and interfaces for the AppDirect marketplace,
					which sells and provisions software to millions of devices around the world.
				</p>
				<div className="row">
					<div className="6u 12u$(small)">
						<h3>Responsibilities</h3>
						<ul>
							<li>Programming: Javascript</li>
							<li>Feature briefing / technical designs.</li>
						</ul>
					</div>
					<div className="6u 12u$(small)">
						<h3>Technologies</h3>
						<ul>
							<li>Javascript / Ecmascript 6</li>
							<li>ReactJS, Redux, Saga</li>
							<li>Backbone, Marionette</li>
						</ul>
					</div>
				</div>
			</article>
		);
	}
}
