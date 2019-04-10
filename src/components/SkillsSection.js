import React from 'react'
import '../css/Skills.css'
import SkillsPop from '../functions/SkillsPop.js'
import SkillsData from '../data/SkillsData.js'

class Skills extends React.Component {

	render(){

		const skillComponents = SkillsData.map(skill => <SkillsPop key={skill.id} title={skill.title} percent={skill.percent} />)

		return (
			<div className="skillsBackground">
				<div className="skillsSection">
					<header>
						<h1>Skills</h1>
						<h2>Things that i'm good at.</h2>
					</header>
				</div>
				<div className="skillsBoxesSection">
					{skillComponents}
				</div>
			</div>
		)

	}

}


export default Skills