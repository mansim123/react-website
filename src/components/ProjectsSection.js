import React, { Component } from 'react'
import '../css/Project.scss'
import ProjectData from "../data/ProjectsData.js";
import ProjectPop from "../functions/ProjectPop.js"

export class Projects extends Component {

  updateThumbs(e) {
    e.preventDefault();
    document.getElementsByClassName("react").style.display = "none"
  } 

  render() {

    const projectComponents = ProjectData.map(project => (
      <ProjectPop
        key={project.id}
        image={project.image}
        reference={project.reference}
        url={project.url}
        tags={project.tags}
        text={project.text}
      />
    ));

    return (
      <div>
        <div className="projectsBackground">
          <div className="projectsSection">
            <header>
              <h1>My Work</h1>
              <h2>A Mix of my front end work</h2>
            </header>
          </div>

          <div className="projectsBoxesSection">
            <div className="projectsBoxesContainer">
              <div className="projectsnav">
                <a className="active" href="#">React</a>
                <a className="" href="#">HTML5 Banners</a>
                <a className="" href="#">Landing Pages</a>
                <a className="" href="#">Games</a>
                <a className="" href="#" onClick={this.updateThumbs}>All</a>
              </div>
              {projectComponents}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects
