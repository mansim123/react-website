import React from "react";
import { TweenMax } from "gsap/TweenMax";

class ProjectPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      image: props.image,
      reference: props.reference,
      url: props.url,
      tags: props.tags,
      text: props.text
    };
    //this.loadImage(this.state.image);

    //reference to the DOM node
    this.productImage = null;
    this.projectsItem = null;
    //reference to the animation
    this.myTween = null;

    this.handleScroll = this.animateScaleOver.bind(this);
    this.handleScroll = this.animateScaleOut.bind(this);
  }

  animateScaleOver() {
    this.myTween = TweenMax.to(this.state.reference, 0.25, {
      scale: "1.05",
      ease: "Sine.easeInOut"
    });
  }

  animateScaleOut() {
    this.myTween = TweenMax.to(this.state.reference, 0.25, {
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

  animateNavOut() {
    TweenMax.to(this.projectsItem, 1, {
      scale: "0",
      ease: "Sine.easeInOut",
      delay: "1",
      onComplete: this.animateNavIn
    });
  }
  animateNavIn(tagArray) {
    // TweenMax.to(this.projectsItem, 1, {
    //   scale: "0",
    //   ease: "Sine.easeInOut",
    //   delay: "1"
    // });
    console.log(tagArray);
    console.log(this.state.tagArray);
  }

  componentWillMount() {

   
  }

  render() {
    const imgWidth = {
      width: "95%"
    };

    const images = this.importAll(
      require.context("../img/thumb", false, /\.(png|jpe?g|svg)$/)
    );

    // setTimeout(() => {
    //   this.animateNavIn(this.state.tagArray);
    // }, 1000);

    return (
      <div className="projectBox react">
        <div
          className="projectsItem"
          onMouseEnter={() => this.animateScaleOver()}
          onMouseLeave={() => this.animateScaleOut()}
          ref={div2 => (this.projectsItem = div2)}
        >
          <a href={this.state.url} target="_blank" rel="noopener noreferrer">
            <img
              ref={div => (this.state.reference = div)}
              className={this.state.tags}
              style={imgWidth}
              src={images[this.state.image]}
              alt="product"
            />
          </a>
        </div>
      </div>
     
    );
  }
}

export default ProjectPop;
