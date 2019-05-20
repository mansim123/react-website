import React from "react";
import { stringify } from "querystring";


class ProjectPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      url: props.url,
      title: props.title,
      text: props.text
    };
    console.log(this.state);
  }

  render() {

    let imageRef = stringify(this.state.image);
    
    return (
      <div className="projectBox">
        <div className="projectsItem">
          <img src={imageRef} />
        </div>
        <div className="projectsDescription">
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default ProjectPop;
