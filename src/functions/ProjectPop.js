import React from "react";
import { stringify } from "querystring";

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
  }

  render() {


    // if(this.state.loading) {
    //   return null
    // }
    return (
      <div className="projectBox">
        <div className="projectsItem">
          {/* <img src={} alt="product" /> */}
        </div>
        <div className="projectsDescription">
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default ProjectPop;
