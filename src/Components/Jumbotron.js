import React from 'react'
import PhoneIcon from 'react-icons/lib/fa/phone'
import GitIcon from 'react-icons/lib/fa/github'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'
import EnvIcon from 'react-icons/lib/fa/envelope'
import Biopic from '../images/profilePic.jpg'

const Jumbotron = props => (

  <div className="jumbotron text-center center-block jumbo">
    <img src={Biopic}
         className=" bio-pic img-thumbnail img-rounded imgwrapper img-responsive"
         width="200"
         alt="Kande Profile"
         />
   <h1>Projects</h1>
    <h3>{"I'm"} a Front-End Web developer offering advanced knowledge of <br/>
      ReactJS, Redux, JavaScript, UI, UX, HTML5, CSS3, Node.js, jQuery, Git, Adobe, SEO and SEM.</h3>
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

export default Jumbotron
