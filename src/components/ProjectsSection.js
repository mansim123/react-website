import React, { Component } from 'react'
import '../css/Project.scss'
import ProjectData from "../data/ProjectsData.js";
import ProjectPop from "../functions/ProjectPop.js"

export class Projects extends Component {

  render() {

    const projectComponents = ProjectData.map(project => (
      <ProjectPop
        key={project.id}
        image={project.image}
        url={project.url}
        title={project.title}
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
                <a href="#">HTML5 Banners</a>
                <a href="#">Landing Pages</a>
                <a href="#">Games</a>
                <a href="#">All</a>
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
