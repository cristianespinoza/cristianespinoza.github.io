import React, { Component } from 'react';
import OneProject from './OneProject';

export default class RecentProjects extends Component {
	render() {
		return (
			<section className="posts">
				<OneProject
					date="2013 - 2017"
					url="https://www.casablancapolo.com/bespoke/"
					title="CASABLANCA BESPOKE"
					image="static/images/pic02.jpg"
				>
					<div>
						<p>
							Development of web application to design and customize
							helmets for high-end Polo brand Casablanca.
							<br />
							<br />
							The app is integrated with the Magento API and
							the company's internal point of sale system.
						</p>
						<p>
							Technologies: PHP - CodeIgniter, MySQL, Javascript - JQuery, CSS3 Bootstrap
						</p>
					</div>
				</OneProject>
				<OneProject
					date="2013 - 2017"
					url="https://www.casablancapolo.com/america/home"
					title="CASABLANCA POLO"
					image="static/images/pic03.jpg"
				>
					<div>
						<p>
							Development and deployment of e-commerce website for high-end Polo brand Casablanca.
						</p>
						<p>
							The website features the company's entire product catalog,
							as well as an application to design helmets,
							and it is integrated with the company's internal point of sale system.
						</p>
						<p>
							Technologies: PHP - Magento, MySQL, Javascript - JQuery, CSS3 Bootstrap
						</p>
					</div>
				</OneProject>
				<OneProject
					date="2015"
					url="https://www.casablancapolo.com"
					title="Point of Sale System"
					image="static/images/pic04.jpg"
				>
					<div>
						<p>
							Development of Point of Sale System, sales and stock management,
							integrated with the Magento commerce platform.
						</p>
						<p>
							Technologies: PHP - CodeIgniter, MySQL, Javascript - JQuery, CSS3 Bootstrap
						</p>
					</div>
				</OneProject>
				<OneProject
					date="2010-2013"
					url="https://intermediasp.com/"
					title="IntermediaSP"
					image="static/images/pic05.jpg"
				>
					<div>
						<p>
							Lead Web Developer in local agency.
						</p>
						<p>
							Comprehensive web development with LAMP stack. Project briefing,
							programming and assisting in sales operations.
						</p>
					</div>
				</OneProject>
			</section>
		);
	}
}
