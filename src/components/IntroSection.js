import React from 'react'
import '../css/Intro.scss'
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

    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    
    //init states
    this.myTween = TweenMax.to(this.head1, 0, {y:"-15",alpha:"0"});
    this.myTween = TweenMax.to(this.avatar, 0, {scale:"0",rotation:"-180"});
    this.myTween = TweenMax.to(this.cvBtn,0, {y:"-15",alpha:"0"});
    this.myTween = TweenMax.to(this.pNumber, 0, { y: "-15", alpha: "0" });
    this.myTween = TweenMax.to(this.pNumber, 0, { y: "-15", alpha: "0" });
    this.myTween = TweenMax.to(this.seeMoreBtn,0, {scale:"0",alpha:"0"});
    
    //animate states

    this.myTween = TweenMax.to(this.avatar, 0.75, {
      delay: 0.5,
      scale: "1",
      rotation: "0",
      ease: "Back.easeOut"
    });

    this.myTween = TweenMax.to(this.reactRibbon, 0.75, {top:"10px",ease:"Sine.easeInOut"});
    this.myTween = TweenMax.to(this.head1, 0.5, {delay:1,y:"0",alpha:"1",ease: "Sine.easeOut"});
    this.myTween = TweenMax.to(this.cvBtn, 0.5, {delay:1.25,y:"0",alpha:"1",ease: "Sine.easeOut"});
    this.myTween = TweenMax.to(this.pNumber, 0.5, {delay:1.5,y:"0",alpha:"1",ease: "Sine.easeOut"});
    this.myTween = TweenMax.to(this.seeMoreBtn, 0.35, {
      delay: 1.75,
      scale: "1",
      alpha: "1"
    });
	}

	handleScroll = () => window.scroll({top: 760, left: 0, behavior: 'smooth'});

	render(){

		const iStyle = {
		  overflow:'hidden'
		};

		return (
      <div style={iStyle}>
        <div className="introBackground">
          <div className="introMainSection">
            <div className="avatar" ref={ava => (this.avatar = ava)} />
            <h1 ref={head1 => (this.head1 = head1)}>
              Front end developer & Project Manager
            </h1>
            <a
              ref={cvB => (this.cvBtn = cvB)}
              rel="noopener noreferrer"
              href="http://www.manuelyemoh.co.uk/ManuelYemohCV_2019_dev_.pdf"
              target="_blank"
            >
              Download CV
            </a>
            <p ref={pNum => (this.pNumber = pNum)}>
              {" "}
              07525003188 / manuelyemoh@gmail.com
            </p>
            <button
              ref={seeMoreB => (this.seeMoreBtn = seeMoreB)}
              href="#"
              onClick={() => this.handleScroll()}
            >
              <FontAwesomeIcon className="fa" icon={faArrowAltCircleDown} />
            </button>
          </div>
          <div className="parallaxIntro" />
        </div>
        <div className="reactRibbon" ref={div => (this.reactRibbon = div)}>
          <h2>This website was built with React</h2>
          <a
            rel="noopener noreferrer"
            href="https://github.com/mansim123/react-website"
            target="_blank"
          >
            See Github Repo here
          </a>
        </div>
      </div>
    );
	}


} 


export default IntroSection; 
