import React from "react";
import { TweenMax } from "gsap/TweenMax";

class ProjectPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      image: props.image,
      url: props.url,
      title: props.title,
      text: props.text
    };
    //this.loadImage(this.state.image);

    //reference to the DOM node
    this.productImage = null;
    //reference to the animation
    this.myTween = null;

    this.handleScroll = this.animateScaleOver.bind(this);
    this.handleScroll = this.animateScaleOut.bind(this);
  }

  animateScaleOver() {
    this.myTween = TweenMax.to(this.productImage, 0.25, {
      scale: "1.05",
      ease: "Sine.easeInOut"
    });
  }

  animateScaleOut() {
    this.myTween = TweenMax.to(this.productImage, 0.25, {
      scale: "1.00",
      ease: "Sine.easeInOut"
    });
  }

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

  render() {

    const imgWidth = {
      width: "95%"
    };

    const images = this.importAll(require.context('../img/thumb', false, /\.(png|jpe?g|svg)$/));

    // if(this.state.loading) {
    //   return null
    // }
    return (
      <div className="projectBox">
        <div
          className="projectsItem"
          onMouseEnter={() => this.animateScaleOver()}
          onMouseLeave={() => this.animateScaleOut()}
        >
          <a
            href={this.state.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              ref={div => (this.productImage = div)}
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
