import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faEye, faUsers, faGamepad, faMugHot, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

library.add(faCode, faEye, faUsers, faGamepad, faMugHot, faGraduationCap)

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
					 <FontAwesomeIcon className="fa" icon={this.state.icon} />
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

//<FontAwesomeIcon className="fa" icon={this.state.icon} />