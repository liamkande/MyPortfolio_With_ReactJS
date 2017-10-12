import React from 'react'
import { About, Jumbotron } from './Lib'
import ProjectList  from './ProjectList'
import NavBar from './NavBar'

export const Main = () => (
	<div>
    <NavBar activeNumb={1} />
    <About />
	</div>
)

export const Portfolio = () => (
	<div>
		<NavBar activeNumb={2} />
		<Jumbotron />
		<ProjectList />
	</div>
)
