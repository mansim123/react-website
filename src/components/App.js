import React, { Component } from 'react';
import '../css/App.css';
import IntroDiv from './IntroSection';
import AboutDiv from './AboutSection';
import ServiceDiv from './ServicesSection';
import SkillsDiv from './SkillsSection';
import ContactDiv from './ContactSection';
import FooterDiv from './FooterSection';

class App extends Component {

	componentDidMount() {
	    	
	}


  render() {
    return (
	    <div>
	      <IntroDiv></IntroDiv>
	      <AboutDiv></AboutDiv>
	      <ServiceDiv></ServiceDiv>
	      <SkillsDiv></SkillsDiv>
	      <ContactDiv></ContactDiv>
	      <FooterDiv></FooterDiv>
	    </div>
    )
  }
}

export default App;
