import React from 'react'

class ServicesPop extends React.Component {

	constructor (props){
		super();
		this.state = {
			icon:props.icon,
			title:props.title,
			text:props.text
		}
	}
	
	render(){
		return(
			<div className="serviceBox">
				<div className="servicesItem">
					<div className="serviceIcon">
						<h3>{this.state.title}</h3>
					</div>
				</div>
				<div className="servicesDescription">
					<p>
					{this.state.text}
					</p>
				</div>
			</div>
		)
	}

}

export default ServicesPop
