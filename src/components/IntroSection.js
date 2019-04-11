import React from 'react'
import '../css/Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import {TweenMax} from "gsap/TweenMax";
// import axios from 'axios';

class IntroSection extends React.Component {

	constructor (props){
		super();
		this.state = {
			title:props.title,
			percent:props.percent,
			colorOne:props.colorOne,
			colorTwo:props.colorTwo
		}

		// reference to the DOM node
	    this.percentBars = null;
	    // reference to the animation
	    this.myTween = null;

	}

	componentDidMount() {
		this.myTween = TweenMax.to(this.reactRibbon, 0.75, {top:"10px",ease:"Sine.easeInOut"});
	}

	handleScroll = () => window.scroll({top: 760, left: 0, behavior: 'smooth'});

	
	render(){

		const iStyle = {
		  overflow:'hidden'
		};

		return(
			<div style={iStyle}>
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
				<div className="reactRibbon" ref={div => this.reactRibbon = div}>
					<h2>
						This website was built with React
					</h2>
					<a href="https://github.com/mansim123/react-website" target="_blank">
						See Github Repo here
					</a>
				</div>
			</div>
			
		)
	}


} 


export default IntroSection; 
