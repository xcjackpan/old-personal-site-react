import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ProjectComponent from '../components/ProjectComponent'

export default class ProjectBoardComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<ReactCSSTransitionGroup transitionName="transition"
	 							 transitionAppear={true}
	 						  	 transitionAppearTimeOut={200}
							  	 transitionEnterTimeout={200}
							  	 transitionLeaveTimeout={200}>
			<div className="project-div" key={this.props.page} style={{ display:this.props.display }}>
 					<div className="projects">
 						<h2>Here's a look at what I've done!</h2>
	 					<div className="projects-row">
	 						<ProjectComponent className ="square"
	 										  projectname = "UWclasswatch"
	 										  image = "classwatch.png"
	 										  description = "Notifications for course enrolment. 700+ users."
	 										  tools = "React, node.js, Javascript, Firebase"
	 										  link = "https://github.com/xcjackpan/ClassWatch"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "Claire"
	 										  image = "claire.png"
	 										  description = "Chatbot for senior citizens. Finalist at Hack the 6ix 2018."
	 										  tools = "React Native"
	 										  link = "https://github.com/xcjackpan/hackthe6ix"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "Always Sunny Soundboard"
	 										  image = "alwayssunny.png"
	 										  description = "Plays quotes from Always Sunny. 250+ Play Store downloads."
	 										  tools = "React Native"
	 										  link = "https://github.com/xcjackpan/always-sunny-soundboard"/>
	 					</div>
	 					<div className="projects-row">
	 						<ProjectComponent className ="square"
	 										  projectname = "Chroma"
	 										  image = "chroma.png"
	 										  description = "Colorful mobile game."
	 										  tools = "Android Studio, Java"
	 										  link = "https://github.com/xcjackpan/Chroma"/>
	 						<ProjectComponent  className ="square"
	 										  projectname = "reSTARant"
	 										  image = "restarant.png"
	 										  description = "Take a photo of a restaurant's sign to see its reviews."
	 										  tools = "React Native"
	 										  link = "https://github.com/xcjackpan/restARant"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "Puppr"
	 										  image = "puppr.png"
	 										  description = "Image gallery that filters out non-dog photos."
	 										  tools = "React, Javascript"
	 										  link = "https://github.com/xcjackpan/puppr"/>

	 					</div>
	 					<div className="projects-row" style={{ paddingBottom: 50 }}>
	 						<ProjectComponent className ="square"
	 										  projectname = "Audio Visualiser"
	 										  image = "visualiser.png"
	 										  description = "Shows you how a song looks."
	 										  tools = "Javascript"
	 										  link = "https://github.com/xcjackpan/AudioAnalyzer"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "When Kevin President"
	 										  image = "kevin.png"
	 										  description = "Why read lot word when few word do trick?"
	 										  tools = "Javascript"
	 										  link = "https://github.com/xcjackpan/WhenKevinPresident"/>
	 						<ProjectComponent className ="square"
	 										  projectname = ""
	 										  image = "tbd.png"
	 										  description = "I gotta start working on projects in sets of three."
	 										  tools = ""
	 										  link = "#"/>
	 					</div>
					</div>
			</div>
		</ReactCSSTransitionGroup>
		);
	}
}