import React from 'react'
import '../css/Contact.css'
import * as emailjs from 'emailjs-com';

class Contact extends React.Component {

	constructor() {
        super()
        this.state = {
            firstName: "",
            email: "",
            subject: "",
            value:""
        }
        this.handleChange = this.handleChange.bind(this)
        //this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleChange(event) {
    	event.preventDefault();
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }

    handleFormSubmit (event) {
      
	  event.preventDefault();

	  const service_id = "default_service";
  	  const template_id = "gmail";
  	  const user_id = "user_3i82VnlQSimK07gA3RFgh"

  	  var templateParms = {
  	  	firstName: this.state.firstName,
	  	email: this.state.email,
	  	subject: this.state.subject,
	  	message: this.state.value
  	  }

  	  console.log(templateParms);

	  emailjs.send(service_id,template_id,templateParms,user_id)
	    .then((response) => {
	       console.log('SUCCESS!', response.status, response.text);
	    }, (err) => {
	       console.log('FAILED...', err);
	  });

	};
	
	render () {

		return(
			<div className="contactBackground">
				<div className="contactSection">
						<header>
							<h1>Contact</h1>
							<h2>Drop me line to discuss projects</h2>
						</header>
				</div>
				<div className="contactSectionContainer">
						<form>

						<div className="contactInputs">
							<input 
				                name="firstName" 
				                value={this.state.firstName} 
				                onChange={this.handleChange} 
				                placeholder="First Name"
				            />
			            </div>
			            <div className="contactInputs">
				            <input 
				                name="email" 
				                value={this.state.email}
				                onChange={this.handleChange} 
				                placeholder="Email" 
				            />
			            </div>
			            <div className="contactInputs">
				            <input 
				                name="subject" 
				                value={this.state.subject}
				                onChange={this.handleChange} 
				                placeholder="Subject" 
				            />
			            </div>
			            <div className="contactTextArea">
				            <textarea 
				            	name="value"
			                    value={this.state.value}
			                    onChange={this.handleChange}
			                    placeholder="Main message" 
			                    cols="40"
			                    rows="10"
			                />
		                </div>
		                <div className="contactSubmit">
		                	<button 
		                		onClick={this.handleFormSubmit.bind(this)}
		                	></button>
		                </div>
		                <div>
						  {this.state.mailSent &&
						    <div>Thank you for contcting us.</div>
						  }
						</div>
				       </form>
		        </div>
			</div>
			
		)

	}

}


export default Contact
