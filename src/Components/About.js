import React from 'react'
import Logo from '../logo.svg'


export const About = () => (
	<div className="container-fluid">
	<div className="row">
		<header className="text-center">
		<img src={Logo} width="80" height="70" alt="LKPLAYS Logo" />
		</header>
		<aside className="asideleft col-lg-4 col-md-12 col-sm-12 col-xs-12">
			<h1>What can I create for you?</h1>
		</aside>
		<div className="container-fluid">
		<section className="sectionright col-lg-7 col-md-12 col-sm-12 col-xs-12">
			<h2 className="h-shadow">Creating Compelling Branding</h2>
			<p>For the past 5 years I've brought ideas to life for individuals, small businesses and fortune 500 companies. Visually telling their stories. Building brands that fit. Solving problems. Doing my part to make the world a more beautiful place. I would like to do the same for you. Whether it's through logo creation, graphic design, Front-end development &amp; Web design. I've worked in many areas as my portfolio will attest to. Check out my experience. See my portfolio. Let's talk about what I can do for you. Let me create something great for you and your business. Let's build a brand and content that fits your needs. I'm also active on social media so if you're curious about what I'm up to you can <a href="https://twitter.com/lkplaysmusic">follow me</a> on Twitter. Thanks!</p>
		</section>
		</div>
	</div>
	</div>
)

export default About
