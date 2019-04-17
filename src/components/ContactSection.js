import React from 'react'
import '../css/Contact.css'
import * as emailjs from 'emailjs-com';

const redBorder = {
	border:"2px solid red"
}

const normalBorder = {
	border:"1px solid #ccc"
}

class Contact extends React.Component {

	constructor() {
        super()

        this.state = {
            firstName: "",
            email: "",
            subject: "",
            message:"",
            outline:"normalBorder",
            emailError:"",
            emailSuccess:"",
            errors: {
            	name:'',
            	email:'',
            	subject:'',
            	message:'',
            	outlineName:normalBorder,
            	outlineEmail:normalBorder,
            	outlineSubject:normalBorder,
            	outlineMessage:normalBorder,
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleChange(event) {
    	event.preventDefault();
        const {name, value, type, checked} = event.target

        this.setState({
            [name]: value
        }) 
    }

    validateEmail(email) {

	    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

	    return expression.test(String(email).toLowerCase())
	}

    validateMail () {
    	let formIsValid = true
    	let errors = {}

    	if(!this.state.firstName || this.state.firstName.length < 3){
    		errors.name = "* First name is minimum 3 characters long"
    		errors.outlineName = redBorder
    		formIsValid = false
    	}
    	else {
    		errors.name = ""
    		errors.outlineName = normalBorder
    	}

    	if(this.validateEmail(this.state.email) === false){
    		errors.email = "* This is not a valid email"
    		errors.outlineEmail = redBorder
    		formIsValid = false
    	}else{
    		errors.email = ""
    		errors.outlineEmail = normalBorder
    	}

    	if(!this.state.subject || this.state.subject.length < 3){
    		errors.subject = "* Subject is minimum 3 characters long"
    		errors.outlineSubject = redBorder
    		formIsValid = false
    	}
    	else {
    		errors.subject = ""
    		errors.outlinesubject = normalBorder
    	}

    	if(!this.state.message || this.state.message.length < 10){
    		errors.outlineMessage = redBorder
    		errors.message = "* Message is minimum 10 characters long"
    		formIsValid = false
    	}
    	else {
    		errors.message = ""
    		errors.outlineMessage = normalBorder
    	}

		this.setState({
			emailError:"",
            emailSuccess:"",
			errors: errors
		})

		return formIsValid
    }

    handleFormSubmit (event) {
      
	  event.preventDefault();

	  if (!this.validateMail()){
	  	return
	  }

      const responseMessage = this;

	  const service_id = "default_service";
  	  const template_id = "gmail";
  	  const user_id = "user_3i82VnlQSimK07gA3RFgh"

  	  var templateParms = {
  	  	firstName: this.state.firstName,
	  	email: this.state.email,
	  	subject: this.state.subject,
	  	message: this.state.value
  	  }

	  emailjs.send(service_id,template_id,templateParms,user_id)
	    .then((response) => {
	       console.log('SUCCESS!', response.status, response.text);
	       responseMessage.setState({
		       firstName: "",
		       email: "",
		       subject: "",
		       message:"",
	       	   emailSuccess:"The message was sent, I will get back to you ASAP"
	       })
	    }, (err) => {
	       console.log('FAILED...', err);
	       responseMessage.setState({
		      firstName: "",
		      email: "",
		      subject: "",
		      message:"",
       		  emailError:"Error! message was not sent, please try again later"
	       })
	  });
	};
	
	render () {

		let errorsStyle = {
			color:'red',
			fontWeight:'bold',
			textShadow: '#000 1px 1px 1px'
		}

		let SucessStyle = {
			color:'white',
			fontWeight:'bold',
			textShadow: '#000 1px 1px 1px'
		}

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
				                style={this.state.errors.outlineName}
				            />
			            </div>
			            <div className="contactInputs">
				            <input 
				                name="email" 
				                value={this.state.email}
				                onChange={this.handleChange} 
				                placeholder="Email"
				                style={this.state.errors.outlineEmail}
				            />
			            </div>
			            <div className="contactInputs">
				            <input 
				                name="subject" 
				                value={this.state.subject}
				                onChange={this.handleChange} 
				                placeholder="Subject" 
				                style={this.state.errors.outlineSubject}
				            />
			            </div>
			            <div className="contactTextArea">
				            <textarea 
				            	name="message"
			                    value={this.state.message}
			                    onChange={this.handleChange}
			                    placeholder="Main message" 
			                    style={this.state.errors.outlineMessage}
			                    cols="40"
			                    rows="10"
			                />
		                </div>
		                <div className="errorSection">
			                <p style={errorsStyle}>{this.state.errors.name}</p>
			                <p style={errorsStyle}>{this.state.errors.email}</p>
			                <p style={errorsStyle}>{this.state.errors.subject}</p>
			                <p style={errorsStyle}>{this.state.errors.message}</p>
			                <p style={errorsStyle}>{this.state.emailError}</p>
			                <p style={SucessStyle}>{this.state.emailSuccess}</p>
		                </div>
		                <div className="contactSubmit">
		                	<button 
		                		onClick={this.handleFormSubmit.bind(this)}
		                	>Submit</button>
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
