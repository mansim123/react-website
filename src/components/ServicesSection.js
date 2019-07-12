import React from "react";
import "../css/Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceData from "../data/ServiceData.js";
import { TweenMax } from "gsap/TweenMax";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faEye,
  faUsers,
  faGamepad,
  faMugHot,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

library.add(faCode, faEye, faUsers, faGamepad, faMugHot, faGraduationCap);

class Services extends React.Component {
  constructor() {
    super();

    // cards, elements tha will be used in the tween
    this.cards = [];

    // the timeline instance
    this.tl = new TimelineLite({ paused: false });

    // reference to the animation
    this.myTween = null;

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.myTween = TweenMax.to(this.serviceHeader, 0, { y: "-15", alpha: "0" });
    this.tl.staggerTo(this.cards, 0, { autoAlpha: 0, y: 30 }, 0.2);
  }

  handleScroll(event) {
    if (window.scrollY >= 1200) {
      this.tl.staggerTo(this.cards, 1, { autoAlpha: 1, y: 0 }, 0.2);
      this.myTween = TweenMax.to(this.serviceHeader, 0.5, {
        delay: 0,
        y: "0",
        alpha: "1",
        ease: "Sine.easeOut"
      });
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  render() {
    const serviceComponents = ServiceData.map((service, index) => (
      <div
        ref={div => (this.cards[index] = div)}
        key={service.id}
        className="serviceBox"
      >
        <div className="servicesItem">
          <div className="serviceIcon">
            <FontAwesomeIcon className="fa" icon={service.icon} />
            <h3>{service.title}</h3>
          </div>
        </div>
        <div className="servicesDescription">
          <p>{service.text}</p>
        </div>
      </div>
    ));
    {
      console.log(serviceComponents);
    }

    return (
      <div className="servicesBackground">
        <div className="servicesSection">
          <header ref={serviceH => (this.serviceHeader = serviceH)}>
            <h1>What I can do</h1>
            <h2>A jack of many trades</h2>
          </header>
        </div>
        <div className="ServicesBoxesSection">
          <div className="ServicesBoxesContainer">{serviceComponents}</div>
        </div>
      </div>
    );
  }
}

export default Services;
