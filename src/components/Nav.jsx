import React, { Component } from 'react';
import ContactIcon from './ContactIcon';

export default class Nav extends Component {
	render() {
		return (
			<nav id="nav">
				<ul className="links">
					<li className="active"><a href="index.html">Homepage</a></li>
					<li><a href="https://github.com/cristianespinoza/cristianespinoza.github.io">Site Source</a></li>
					<li><a href="static/resume.pdf">Download Resume</a></li>
				</ul>
				<ul className="icons">
					<li>
						<ContactIcon
							icon="github"
							label="Github"
							url="https://github.com/cristianespinoza"
						/>
					</li>
					<li>
						<ContactIcon
							icon="linkedin"
							label="LinkedIn"
							url="https://www.linkedin.com/in/cristianarielespinoza/"
						/>
					</li>
					<li>
						<ContactIcon
							icon="facebook"
							label="Facebook"
							url="https://www.facebook.com/cristian.ariel.espinoza"
						/>
					</li>
					<li>
						<ContactIcon
							icon="skype"
							label="Skype"
							url="skype:profile_name?add"
						/>
					</li>
				</ul>
			</nav>
		);
	}
}
