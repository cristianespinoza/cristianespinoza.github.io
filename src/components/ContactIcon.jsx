import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactIcon extends Component {
	static propTypes = {
		icon: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired
	}

	render() {
		const {
			icon,
			label,
			url
		} = this.props;
		const className = `icon fa-${icon}`;
		return (
			<a
				href={url}
				className={className}
			>
				<span className="label">
					{label}
				</span>
			</a>
		);
	}
}
