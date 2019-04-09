import React from 'react'
import '../css/Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';

class IntroSection extends React.Component {

	handleScroll = () => console.log("hit");

	render(){

		return(
			<div className="introBackground">
				<div className="introMainSection">
					<div className="avatar"></div>
					<h1>ReactJs front end developer</h1>
					<p> 07525003188 / manuelyemoh@gmail.com</p>
					<button href="#"  onClick={() => this.handleScroll()}>
						<FontAwesomeIcon className="fa" icon={faArrowAltCircleDown} />
					</button>
				</div>
			</div>
		)
	}


} 


export default IntroSection; 
