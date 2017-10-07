import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OneProject extends Component {
	static propTypes = {
		date: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		children: React.PropTypes.element
	}

	render() {
		const {
			date,
			url,
			title,
			image,
			children
		} = this.props;
		return (
			<article>
				<header>
					<span className="date">{date}</span>
					<h2><a href={url}>{title}</a></h2>
				</header>
				<a href={url} className="image fit"><img src={image} alt="" /></a>
				{children}
			</article>
		);
	}
}
