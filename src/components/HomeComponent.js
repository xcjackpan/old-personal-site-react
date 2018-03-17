import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class HomeComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.display)
		return(
			<div>
			 	<ReactCSSTransitionGroup transitionName="transition"
 			 							 transitionAppear={true}
 			 						  	 transitionAppearTimeOut={200}
 									  	 transitionEnterTimeout={200}
 									  	 transitionLeaveTimeout={200}>
					<div key={this.props.page} className="titleContainer" style={{display:this.props.display}}>
						<div className="banner">
							<h1>JACK PAN</h1>
						</div>
						<ul className="home-nav">
			 				<li onClick={this.props.toAbout}>ABOUT</li>
			 				<li>PROJECTS</li>
			 				<li>BLOG</li>
						</ul>
						<img className="jelly" src="jelly.png"/>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}