import React from 'react'
import '../css/Contact.css'

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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
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

    handleSubmit(event) {
	   //alert('An essay was submitted: '+ this.state.firstName + this.state.email + this.state.subject + this.state.value);
	   event.preventDefault();
	}
	
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
						<form onSubmit={this.handleSubmit}>

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
		                	<button>Submit</button>
		                </div>
				       </form>
		        </div>
			</div>
			
		)

	}

}


export default Contact
