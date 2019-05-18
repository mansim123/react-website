import React from "react";
import "../css/Services.scss";
import ServicesPop from "../functions/ServicesPop.js";
import ServiceData from "../data/ServiceData.js";
//import my Json info
//change logo title paragraph and give it an ID

class Services extends React.Component {
  render() {
    const serviceComponents = ServiceData.map(service => (
      <ServicesPop
        key={service.id}
        icon={service.icon}
        title={service.title}
        text={service.text}
      />
    ));

    return (
      <div className="servicesBackground">
        <div className="servicesSection">
          <header>
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
