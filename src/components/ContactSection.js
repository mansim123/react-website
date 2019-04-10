import React from 'react'
import '../css/Contact.css'

class Contact extends React.Component {

	constructor() {
        super()
        this.state = {
            firstName: "",
            email: "",
            subject: ""
        }
        this.handleChange = this.handleChange.bind(this)
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

    handleSubmit (event){
    	console.log("submitted")
    }
	
	render () {

		return(
			<div className="contactBackground">
				<div className="aboutSection">
					<header>
						<h1>The drive to learn</h1>
						<h2>working with all the latest technlogies</h2>
					</header>
				<form onSubmit={this.handleSubmit}>
				<input 
	                name="firstName" 
	                value={this.state.firstName} 
	                onChange={this.handleChange} 
	                placeholder="First Name" 
	            />
	            <br />
	            
	            <input 
	                name="email" 
	                value={this.state.email}
	                onChange={this.handleChange} 
	                placeholder="Email" 
	            />
	            <br />
	            
	            <input 
	                name="subject" 
	                value={this.state.subject}
	                onChange={this.handleChange} 
	                placeholder="Subject" 
	            />
	            <br />

	            <textarea 
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
		       </form>
		        </div>
			</div>
			
		)

	}

}


export default Contact
