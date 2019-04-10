import React from 'react'

class SkillsPop extends React.Component {

	componentDidMount() {

	}

	constructor (props){
		super();
		this.state = {
			title:props.title,
			percent:props.percent
		}
	}
	
	render(){
		return(
			<div className="skillsBox">
				<div className="skillsItem">
					<div className="skillsTitle">
						<span>
							{this.state.title}
						</span>
					</div>
					<div className="skillsPercentage"></div>
					<div className="skillsPercentageTitle"> {this.state.percent}%</div>
				</div>
			</div>

		)
	}

}

export default SkillsPop
