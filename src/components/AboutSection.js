import React from 'react'
import '../css/About.scss'
import profilePicture from '../img/profilePic.jpg'

class About extends React.Component {

	render(){
		return(
			<div className="aboutBackground">
				<div className="aboutSection">
					<header>
						<h1>The drive to learn</h1>
						<h2>working with all the latest technlogies</h2>
					</header>
					<div className="aboutSectionProfile">
						<div className="col_1">
							<img className="profilePicture" alt="profilePicture" src={profilePicture}/>
						</div>
						<div className="col_2">
							<h3>Manuel Yemoh</h3>
							<p>
								BSc in Computer Game Design, with over 9 years of professional 
								digital development experience and 4 years running a successful 
								production studio. Working with some of the biggest agencies in 
								London, specialising in HTML5 digital development, project management 
								and consultation. Available for on-site or remote work.
							</p>
						</div>
					</div>
				</div>
			</div>
		)

	}

}

export default About
