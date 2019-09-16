import React, { Component } from 'react';

export default class CurrentProject extends Component {
	render() {
		return (
			<article className="post">
				<h2>Current project</h2>
				<a href="https://appdirect.com" className="image main"><img src="static/images/picepam.jpg" alt="" /></a>
				<h2>Lead Software Engineer @ Epam Systems PL</h2>
				<p>Leading a team of software engineers, developing solutions for various international clients, using the latest Frontend technologies (React, Node)</p>
				<p>Resource Management: Interviewing, hiring, promotions, people management, overseeing other developers' career growth.</p>
				<div className="row">
					<div className="6u 12u$(small)">
						<h3>Responsibilities</h3>
						<ul>
							<li>Programming</li>
							<li>Team & People Management</li>
						</ul>
					</div>
					<div className="6u 12u$(small)">
						<h3>Technologies</h3>
						<ul>
							<li>Javascript / Ecmascript 6</li>
							<li>ReactJS, Redux, Saga</li>
							<li>VueJS</li>
						</ul>
					</div>
				</div>
			</article>
		);
	}
}
