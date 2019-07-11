import React from "react";
import "../css/About.scss";
import profilePicture from "../img/profilePic.jpg";
import { TweenMax } from "gsap/TweenMax";

class About extends React.Component {
  constructor() {
    super();
    // reference to the animation
	  this.myTween = null;

	this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    this.myTween = TweenMax.to(this.aboutHeader, 0, { y: "-15", alpha: "0" });
    this.myTween = TweenMax.to(this.aboutImage, 0, { x: "-50", alpha: "0" });
    this.myTween = TweenMax.to(this.aboutText, 0, { x: "50", alpha: "0" });

  }

  handleScroll(event) {
    if (window.scrollY >= 350) {
		this.myTween = TweenMax.to(this.aboutHeader, 0.5, {
      delay:0,
      y: "0",
      alpha: "1",
      ease: "Sine.easeOut"
    });
    this.myTween = TweenMax.to(this.aboutImage, 1, {
      delay: 0.25,
      x: "0",
      alpha: "1",
      ease: "Sine.easeOut"
    });
    this.myTween = TweenMax.to(this.aboutText, 1, {
      delay: 0.25,
      x: "0",
      alpha: "1",
      ease: "Sine.easeOut"
    });
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  render() {
    return (
      <div className="aboutBackground">
        <div
          ref={aboutH => (this.aboutHeader = aboutH)}
          className="aboutSection"
        >
          <header>
            <h1>The drive to learn</h1>
            <h2>working with all the latest technlogies</h2>
          </header>
          <div className="aboutSectionProfile">
            <div className="col_1">
              <img
                className="profilePicture"
                ref={aboutI => (this.aboutImage = aboutI)}
                alt="profilePicture"
                src={profilePicture}
              />
            </div>
            <div ref={aboutT => (this.aboutText = aboutT)} className="col_2">
              <h3>Manuel Yemoh</h3>
              <p>
                BSc in Computer Game Design, with over 9 years of professional
                digital development experience and 4 years running a successful
                production studio. Working with some of the biggest agencies in
                London, specialising in HTML5 digital development, project
                management and consultation. Available for on-site or remote
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
