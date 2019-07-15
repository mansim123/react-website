import React, { Component } from 'react'
import ReactDOM from "react-dom";
import '../css/Project.scss'
import ProjectData from "../data/ProjectsData.js";
import { TweenMax } from "gsap/TweenMax";
import { TimelineLite } from "gsap/all";

export class Projects extends Component {
         constructor() {
           super();

           this.state = {
             loading: "",
             image: "",
             reference: [],
             url: "",
             tags: "",
             text: "",
             scrollPos: 0
           };

           this.reference = [];

           // the timeline instance
           this.tl = new TimelineLite({ paused: false });

           // cards, elements tha will be used in the tween
           this.cards = [];

           //reference to the DOM node
           this.productImage = null;
           this.projectsItem = null;
           //reference to the animation
           this.myTween = null;

           this.handleScroll = this.handleScroll.bind(this);
           this.handleRollOver = this.animateScaleOver.bind(this);
           this.handleRollOut = this.animateScaleOut.bind(this);
         }

         componentDidMount() {
           let scrollSection = ReactDOM.findDOMNode(
             this.refs["projectsHeight"]
           ).getBoundingClientRect().top;

           this.setState({
             scrollPos: scrollSection
           });

           window.addEventListener("scroll", this.handleScroll);

           this.myTween = TweenMax.to(this.projectHeader, 0, {
             y: "-15",
             alpha: "0"
           });
           this.tl.staggerTo(this.cards,0,{ scale: 0},0.2);
         }

         handleScroll(event) {
           if (window.scrollY >= this.state.scrollPos - 300) {
             this.tl.staggerTo(
               this.cards,
               1,
               { scale: 1 },
               0.2
             );
             this.myTween = TweenMax.to(this.projectHeader, 0.5, {
               delay: 0,
               y: "0",
               alpha: "1",
               ease: "Sine.easeOut"
             });
             window.removeEventListener("scroll", this.handleScroll);
           }
         }

         animateScaleOver(a) {
           this.myTween = TweenMax.to(this.reference[a], 0.25, {
             scale: "1.05",
             ease: "Sine.easeInOut"
           });
         }

         animateScaleOut(a) {
           this.myTween = TweenMax.to(this.reference[a], 0.25, {
             scale: "1.00",
             ease: "Sine.easeInOut"
           });
         }

         importAll(r) {
           let images = {};
           r.keys().map((item, index) => {
             images[item.replace("./", "")] = r(item);
           });
           return images;
         }

         // animateNavOut() {
         //   TweenMax.to(this.projectsItem, 1, {
         //     scale: "0",
         //     ease: "Sine.easeInOut",
         //     delay: "1",
         //     onComplete: this.animateNavIn
         //   });
         // }
         // animateNavIn(tagArray) {
         //   // TweenMax.to(this.projectsItem, 1, {
         //   //   scale: "0",
         //   //   ease: "Sine.easeInOut",
         //   //   delay: "1"
         //   // });
         //   console.log(tagArray);
         //   console.log(this.state.tagArray);
         // }

         updateThumbs(e) {
           e.preventDefault();
           document.getElementsByClassName("react").style.display =
             "none";
         }

         render() {
           const imgWidth = {
             width: "95%"
           };

           const images = this.importAll(
             require.context("../img/thumb", false, /\.(png|jpe?g|svg)$/)
           );

           const projectComponents = ProjectData.map(
             (project, index) => (
               <div
                 key={project.id}
                 ref={div => (this.cards[index] = div)}
                 className="projectBox react"
               >
                 <div
                   className="projectsItem"
                   onMouseEnter={() => this.animateScaleOver(index)}
                   onMouseLeave={() => this.animateScaleOut(index)}
                   ref={div2 => (this.projectsItem = div2)}
                 >
                   <a
                     href={project.url}
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <img
                       ref={div => (this.reference[index] = div)}
                       className={project.tags}
                       style={imgWidth}
                       src={images[project.image]}
                       alt="product"
                     />
                   </a>
                 </div>
               </div>
             )
           );

           return (
             <div>
               <div
                 ref="projectsHeight"
                 className="projectsBackground"
               >
                 <div
                   ref={projectH => (this.projectHeader = projectH)}
                   className="projectsSection"
                 >
                   <header>
                     <h1>My Work</h1>
                     <h2>A Mix of my front end work</h2>
                   </header>
                 </div>

                 <div className="projectsBoxesSection">
                   <div className="projectsBoxesContainer">
                     {projectComponents}
                   </div>
                 </div>
               </div>
             </div>
           );
         }
       }

export default Projects
