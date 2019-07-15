import React from "react";
import ReactDOM from "react-dom";
import { TweenMax } from "gsap/TweenMax";
import "../css/Skills.scss";
import SkillsData from "../data/SkillsData.js";

class Skills extends React.Component {
  constructor() {
    super();

    this.state = {
      scrollPos: 0
    };

    //reference to the DOM node
    this.percentBars = null;
    // reference to the animation
    this.myTween = null;

    this.percentAnimation = [];

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    let scrollSection = ReactDOM.findDOMNode(
      this.refs["skillsHeight"]
    ).getBoundingClientRect().top;

    this.setState({
      scrollPos: scrollSection
    });

    this.myTween = TweenMax.to(this.percentAnimation, 2, {
      scaleX: 0,
      ease: "Sine.easeInOut",
      transformOrigin: "0% 100%"
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY >= this.state.scrollPos + 150) {
      this.myTween = TweenMax.to(this.percentAnimation, 2, {
        scaleX: 1,
        ease: "Sine.easeInOut",
        transformOrigin: "0% 100%"
      });

      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  render() {
    const skillComponents = SkillsData.map((skill, index) => (
      <div key={skill.id} className="skillsBox">
        <div className="skillsItem">
          <div
            style={{ backgroundColor: skill.colorOne }}
            className="skillsTitle"
          >
            <span>{skill.title}</span>
          </div>
          <div
            style={{
              backgroundColor: skill.colorTwo,
              width: skill.percent + "%"
            }}
            ref={div => (this.percentAnimation[index] = div)}
            className="skillsPercentage"
          />
          <div className="skillsPercentageTitle"> {skill.percent}%</div>
        </div>
      </div>
    ));

    return (
      <div ref="skillsHeight" className="skillsBackground">
        <div className="skillsSection">
          <header>
            <h1>Skills</h1>
            <h2>Things that i'm good at.</h2>
          </header>
        </div>
        <div className="skillsBoxesSection">
          <div className="skillsBoxesContainer">{skillComponents}</div>
        </div>
      </div>
    );
  }
}

export default Skills;
