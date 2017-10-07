import React, { Component } from 'react';
import ContactIcon from './ContactIcon';

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<section>
					<h3>About this Site</h3>
					<p>
						This site was built with <a href="https://reactjs.org/">ReactJS</a>,
						backward compatibility is provided by <a href="https://babeljs.io">Babel</a>,
						and the assets are compiled by <a href="https://webpack.github.io/">Webpack</a>.
					</p>
					<p>Site hosted with <i className="icon fa-heart" /> by <a href="https://github.com">Github</a>.</p>
					<p>
						<a href="https://github.com/cristianespinoza/cristianespinoza.github.io">View Project Source</a>
					</p>
				</section>
				<section>
					<h3>Get in Touch!</h3>
					<p>
						I'm always interested in challenging projects.
						Feel free to contact me for advice or inquiries,
					</p>
					<p>
						You can find me on:
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
					</p>
				</section>
			</footer>
		);
	}
}
