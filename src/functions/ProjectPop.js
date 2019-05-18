import React from "react";


class ProjectPop extends React.Component {
  constructor(props) {
    super();
    this.state = {
      image: props.icon,
      url: props.url,
      title: props.title,
      text: props.text
    };

  }

  render() {
    return (
       <div className="projectBox">
          <div className="projectsItem">
              <h3>{this.state.title}</h3>
          </div>
          <div className="projectsDescription">
            <p>{this.state.text}</p>
          </div>
        </div> 
    );
  }
}

export default ProjectPop;
