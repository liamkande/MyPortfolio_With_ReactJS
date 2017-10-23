import React from 'react'
import Project from './Projects'

const ProjectList = props  => {
  return (
    <div className="row">
      <div className="col-lg-10 col-lg-offset-1">
        <div className="row" >
          {props.projects.map(
          	(projects, i) =>
          		<Project  key={i} {...projects} />
          	 )}
      </div>
      </div>
      </div>
  )
}
export default ProjectList
