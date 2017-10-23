import React from 'react'
import Project from './Projects'

const ProjectList = props  => {
  return (
        <div className="row" >
          {props.projects.map(
          	(projects, i) =>
          		<Project  key={i} {...projects} />
          	 )}
      </div>
  )
}
export default ProjectList
