import React from 'react'
import { Carousel} from 'react-bootstrap';
import PhoneIcon from 'react-icons/lib/fa/phone'
import GitIcon from 'react-icons/lib/fa/github'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'
import EnvIcon from'react-icons/lib/fa/envelope'

export const About = () => (
	<div className="container-fluid">
	<div className="row">
		<header className="text-center">
		<img src="images/LKweblogo.svg" width="80" height="70" alt="LKPLAYS Logo" />
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

export const Jumbotron = () => (

	<div className="jumbotron text-center center-block container-fluid">
	<img src="images/profilePic.jpg"
			 className=" bio-pic img-thumbnail img-rounded imgwrapper img-responsive center-block jumbo"
			 width="200"
			 alt="Kande Profile"
			 />
	  <h1>Projects</h1>
		<h3>{"I'm"} a Front-End Web developer offering advanced knowledge of <br/>
	    JavaScript, React.js, HTML5, CSS3, jQuery, Node.js, Git, Adobe, UI, UX, SEO and SEM.</h3>
	  <address>
	  	<a className="btn btn-lg" href="mailto:kande.ans@outlook.com">
				<span aria-hidden="true"><EnvIcon size={25} /> kande.ans@outlook.com</span></a>
				 <a className="btn btn-lg" href="tel:646-717-0370">
				 <span aria-hidden="true"><PhoneIcon size={25}/>646-717-0370</span></a>
				 <a className="btn btn-sm" href="https://www.linkedin.com/in/liamkande/">
				 <span><LinkedInIcon size={35}/></span></a>
				 <a className="btn btn-sm" href="https://github.com/liamkande">
				 <span><GitIcon size={37}/></span></a>
	  </address>
		<div>
		</div>
	  <p className="text-center">
		<a className="btn btn-primary btn-lg" href="https://s3.us-east-2.amazonaws.com/liamkande.com/preview/Liam_Kande%CC%81_Resume.pdf"
		download="LiamKandé-Resume"
		role="button">Download Resume</a></p>
	</div>
)

export const Crsl = () => (
	    <section className="row section-header">
	      <div className="col-sm-12">&nbsp; </div>
				<div className="container-fluid">
	      <h2 className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 text-center"> Web, Mobile, Logo &amp; Graphic design Projects {"I've"} worked on.</h2>
				</div>
				<Carousel>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet="images/Optimized-Carousel/Carousel-Img1_1@2x-100.jpg 2x, images/Optimized-Carousel/Carousel-Img1_1@1x-100.jpg " />
						<source media= "(min-width: 500px)" srcSet="images/Optimized-Carousel/Carousel-Img1_1-800.jpg" />
						<img src="images/Optimized-Carousel/Carousel-Img1_1-600.jpg" className="center-block img-responsive" alt="Coffee Shop Web Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet="images/Optimized-Carousel/Carousel-Img2@2x-100.jpg 2x, images/Optimized-Carousel/Carousel-Img2@1x-100.jpg" />
						<source media= "(min-width: 500px)" srcSet="images/Optimized-Carousel/Carousel-Img2-800.jpg" />
						<img src="images/Optimized-Carousel/Carousel-Img2-600.jpg" className="center-block img-responsive" alt="Real Estate Web Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet="images/Optimized-Carousel/Carousel-Img3@2x-100.jpg 2x, images/Optimized-Carousel/Carousel-Img3@1x-100.jpg" />
						<source media= "(min-width: 500px)" srcSet="images/Optimized-Carousel/Carousel-Img3-800.jpg" />
						<img src="images/Optimized-Carousel/Carousel-Img3-600.jpg" className="center-block img-responsive" alt="Beauty Boutique Graphic Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet="images/Optimized-Carousel/Carousel-Img4@2x-100.jpg 2x, images/Optimized-Carousel/Carousel-Img4@1x-100.jpg" />
						<source media= "(min-width: 500px)" srcSet="images/Optimized-Carousel/Carousel-Img4-800.jpg" />
						<img src="images/Optimized-Carousel/Carousel-Img4-600.jpg" className="center-block img-responsive" alt="LK❤️PLAYS Web Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet="images/Optimized-Carousel/Carousel-Img5@2x-100.jpg 2x, images/Optimized-Carousel/Carousel-Img5@1x-100.jpg" />
						<source media= "(min-width: 500px)" srcSet="images/Optimized-Carousel/Carousel-Img5-800.jpg" />
						<img src="images/Optimized-Carousel/Carousel-Img5-600.jpg"  className="center-block img-responsive" alt="Success Wall Graphic Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet="images/Optimized-Carousel/Carousel-Img6@2x-100.jpg 2x, images/Optimized-Carousel/Carousel-Img6@1x-100.jpg" />
						<source media= "(min-width: 500px)" srcSet="images/Optimized-Carousel/Carousel-Img6-800.jpg" />
						<img src="images/Optimized-Carousel/Carousel-Img6-600.jpg" className="center-block img-responsive" alt="LK❤️PLAYS Logo Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet="images/Optimized-Carousel/Carousel-Img7@2x-100.jpg 2x, images/Optimized-Carousel/Carousel-Img7@1x-100.jpg" />
						<source media= "(min-width: 500px)" srcSet="images/Optimized-Carousel/Carousel-Img7-800.jpg" />
						<img src="images/Optimized-Carousel/Carousel-Img7-600.jpg" className="center-block img-responsive" alt="LK❤️PLAYS Cover Design" />
					</picture>
				</Carousel.Item>
			</Carousel>
		</section>
)
