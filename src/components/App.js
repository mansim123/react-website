import React, { Component } from 'react';
import '../css/App.scss';
import IntroDiv from './IntroSection';
import AboutDiv from './AboutSection';
import ServiceDiv from './ServicesSection';
import SkillsDiv from './SkillsSection';
import ContactDiv from './ContactSection';
import FooterDiv from './FooterSection';
import ProjectDiv from './ProjectsSection'

class App extends Component {

	state = {
	   loading: true
	};

	componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }


  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (

      	<div className="loadingGif">
      		<div className="loadingimage"></div>
      	</div>

      ); // render null when app is not ready
    }
    
    return (
	    <div>
	      <IntroDiv></IntroDiv>
	      <AboutDiv></AboutDiv>
	      <ServiceDiv></ServiceDiv>
				<ProjectDiv></ProjectDiv>
	      <SkillsDiv></SkillsDiv>
	      <ContactDiv></ContactDiv>
	      <FooterDiv></FooterDiv>
	    </div>
    )
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 250));
}


export default App;
