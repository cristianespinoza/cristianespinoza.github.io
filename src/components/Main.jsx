import React, { Component } from 'react';
import CurrentProject from './CurrentProject';
import RecentProjects from './RecentProjects';

export default class Main extends Component {
	render() {
		return (
			<div id="main">
				<article className="post featured">
					<header className="major">
						<h2>Lead Software Engineer</h2>
						<p>14+ years programming experience.</p>
						<p>Technology enthusiast, interested in challenging and rare problems.</p>
					</header>
				</article>
				<CurrentProject />
				<h2>Recent Projects</h2>
				<RecentProjects />
			</div>
		);
	}
}
