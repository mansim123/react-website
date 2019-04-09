import React, { Component } from 'react';
import '../css/App.css';
import IntroDiv from './IntroSection';
import AboutDiv from './AboutSection';
import ServiceDiv from './ServicesSection';

class App extends Component {
  render() {
    return (
	    <div>
	      <IntroDiv></IntroDiv>
	      <AboutDiv></AboutDiv>
	      <ServiceDiv></ServiceDiv>
	    </div>
    )
  }
}

export default App;
