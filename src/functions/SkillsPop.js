import React from 'react'
import {TweenMax} from "gsap/TweenMax";

class SkillsPop extends React.Component {

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

	    this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll (event) {

	     if(window.scrollY >= 1500){
	     	this.myTween = TweenMax.to(this.percentBars, 2, {width:this.state.percent+'%',ease:"Sine.easeInOut"});
	     	window.removeEventListener('scroll', this.handleScroll);
	     }
	}
	
	render(){

		const titleColour = {
		  backgroundColor:this.state.colorOne
		};
		// console.log(this.state.colorOne);
		 const percentColour = {
		   backgroundColor:this.state.colorTwo
		 };

		return(
			<div className="skillsBox">
				<div className="skillsItem">
					<div style={titleColour} className="skillsTitle">
						<span>
							{this.state.title}
						</span>
					</div>
					<div style={percentColour} ref={div => this.percentBars = div} className="skillsPercentage"></div>
					<div className="skillsPercentageTitle"> {this.state.percent}%</div>
				</div>
			</div>

		)
	}

}

export default SkillsPop
