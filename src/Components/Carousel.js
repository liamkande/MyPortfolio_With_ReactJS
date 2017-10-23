import React from 'react'
import { Carousel } from 'react-bootstrap'

import Img1XX from '../images/Optimized-Carousel/Carousel-Img1_1@2x-100.jpg'
import Img1X from '../images/Optimized-Carousel/Carousel-Img1_1@1x-100.jpg'
import Img2XX from '../images/Optimized-Carousel/Carousel-Img2@2x-100.jpg'
import Img2X from '../images/Optimized-Carousel/Carousel-Img2@1x-100.jpg'
import Img3XX from '../images/Optimized-Carousel/Carousel-Img3@2x-100.jpg'
import Img3X from '../images/Optimized-Carousel/Carousel-Img3@1x-100.jpg'
import Img4XX from '../images/Optimized-Carousel/Carousel-Img4@2x-100.jpg'
import Img4X from '../images/Optimized-Carousel/Carousel-Img4@1x-100.jpg'
import Img5XX from '../images/Optimized-Carousel/Carousel-Img5@2x-100.jpg'
import Img5X from '../images/Optimized-Carousel/Carousel-Img5@1x-100.jpg'
import Img6XX from '../images/Optimized-Carousel/Carousel-Img6@2x-100.jpg'
import Img6X from '../images/Optimized-Carousel/Carousel-Img6@1x-100.jpg'
import Img7XX from '../images/Optimized-Carousel/Carousel-Img7@2x-100.jpg'
import Img7X from '../images/Optimized-Carousel/Carousel-Img7@1x-100.jpg'

import Img1L from '../images/Optimized-Carousel/Carousel-Img1_1-800.jpg'
import Img2L from '../images/Optimized-Carousel/Carousel-Img2-800.jpg'
import Img3L from '../images/Optimized-Carousel/Carousel-Img3-800.jpg'
import Img4L from '../images/Optimized-Carousel/Carousel-Img4-800.jpg'
import Img5L from '../images/Optimized-Carousel/Carousel-Img5-800.jpg'
import Img6L from '../images/Optimized-Carousel/Carousel-Img6-800.jpg'
import Img7L from '../images/Optimized-Carousel/Carousel-Img7-800.jpg'

import Img1 from '../images/Optimized-Carousel/Carousel-Img1_1-600.jpg'
import Img2 from '../images/Optimized-Carousel/Carousel-Img2-600.jpg'
import Img3 from '../images/Optimized-Carousel/Carousel-Img3-600.jpg'
import Img4 from '../images/Optimized-Carousel/Carousel-Img4-600.jpg'
import Img5 from '../images/Optimized-Carousel/Carousel-Img5-600.jpg'
import Img6 from '../images/Optimized-Carousel/Carousel-Img6-600.jpg'
import Img7 from '../images/Optimized-Carousel/Carousel-Img7-600.jpg'

export const CarouselImg = () => (
	    <section className="row">
				<div className="section-header">
	      <div className="col-sm-12">&nbsp; </div>

	      <h2 className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 text-center">
					Web, Mobile, Logo &amp; Graphic design Projects {"I've"} worked on.</h2>

				<Carousel>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet={` ${Img1XX} 2x, ${Img1X} `} />
						<source media= "(min-width: 500px)" srcSet={Img1L} />
						<img src={Img1} className="center-block img-responsive crl" alt="Coffee Shop Web Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet={` ${Img2XX} 2x, ${Img2X} `}  />
						<source media= "(min-width: 500px)" srcSet={Img2L} />
						<img src={Img2} className="center-block img-responsive crl" alt="Real Estate Web Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet={` ${Img3XX} 2x, ${Img3X} `} />
						<source media= "(min-width: 500px)" srcSet={Img3L} />
						<img src={Img3} className="center-block img-responsive crl" alt="Beauty Boutique Graphic Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet={` ${Img4XX} 2x, ${Img4X} `} />
						<source media= "(min-width: 500px)" srcSet={Img4L} />
						<img src={Img4} className="center-block img-responsive crl" alt="LK❤️PLAYS Web Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet={` ${Img5XX} 2x, ${Img5X} `} />
						<source media= "(min-width: 500px)" srcSet={Img5L}/>
						<img src={Img5}  className="center-block img-responsive crl" alt="Success Wall Graphic Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet={` ${Img6XX} 2x, ${Img6X} `}  />
						<source media= "(min-width: 500px)" srcSet={Img6L} />
						<img src={Img6} className="center-block img-responsive crl" alt="LK❤️PLAYS Logo Design" />
					</picture>
				</Carousel.Item>
				<Carousel.Item>
					<picture>
						<source media= "(min-width: 750px)" srcSet={` ${Img7XX} 2x, ${Img7X} `}  />
						<source media= "(min-width: 500px)" srcSet={Img7L} />
						<img src={Img7} className="center-block img-responsive crl" alt="LK❤️PLAYS Cover Design" />
					</picture>
				</Carousel.Item>
			</Carousel>
		</div>
		</section>
)
export default CarouselImg
