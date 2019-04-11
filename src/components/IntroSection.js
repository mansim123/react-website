import React from 'react'
import '../css/Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';

class IntroSection extends React.Component {

	handleScroll = () => window.scroll({top: 760, left: 0, behavior: 'smooth'});

	render(){

		return(
			<div className="introBackground">
				<div className="introMainSection">
					<div className="avatar"></div>
					<h1>ReactJs front end developer</h1>
					<a href="http://www.manuelyemoh.co.uk/ManuelYemohCV_2019_dev_.pdf" target="_blank">Download CV</a>
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
