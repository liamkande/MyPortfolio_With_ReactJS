import React,{ Component } from 'react'
import Project from './Project'
import { Crsl } from './Lib'

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
      this.setState({
        projects: [
      {
          name: "My Portfolio with React",
          skills: "React.js | ES6 | JSX | JavaScript | Webpack | NodeJS | Babel | JSON | Yarn",
          downloadLink: "https://github.com/liamkande/MyPortfolio_With_ReactJS/archive/master.zip",
          boxClass: "col-md-12 col-lg-12 box-sp boxwrapper text-center",
          pClass:"text-center",
          description: "Developed my entire portfolio with React using components, subcomponents, routes to map URLs to views, JavaScript functions to animated the UI, worked with state to handle events, JSX, CSS and more.",
          image: "images/thumbnail-SVG/thumbnail-4.svg"
      },
      {
          name: "placeHolder"
      },
      {
          name: "React Calculator",
          skills: "React.js |CSS3 | ES6 | JSX | JavaScript | jest",
          downloadLink: "https://github.com/liamkande/React-Calculator/archive/master.zip",
          boxClass: "col-md-4 col-lg-4 box-four boxwrapper text-center",
          pClass:"text-center detail",
          description: "Developed a Calculator using ReactJS and related tools.",
          image: "images/thumbnail-SVG/thumbnail-1.svg"
      },
      {
          name: "ScoreBoard UI with React",
          skills: "React.js | JavaScript | CSS3 | JSX | jest | ES6 | JSON | Yarn",
          downloadLink: "https://github.com/liamkande/React-Score-Board-App/archive/master.zip",
          boxClass: "col-md-4 col-lg-4 box-one boxwrapper text-center",
          pClass:"text-center detail",
          description: "Developed an Score Board Web-app with ReactJS for playing board or card games...",
          image: "images/thumbnail-SVG/thumbnail-4.svg"
      },
      {
          name: "Travel Activity App with React",
          skills: "React.js | Redux | JSX | SASS | Webpack | NodeJS | Babel",
          downloadLink: "https://github.com/liamkande/TravelDayCount_React_App/archive/master.zip",
          boxClass: "col-md-4 col-lg-4 box-three boxwrapper text-center",
          pClass:"text-center detail",
          description: "Created an browser-based activity counter app with React, used Redux to managed the data state, used propTypes for checking props, added default data, worked with SASS, JXS and more.",
          image: "images/thumbnail-SVG/thumbnail-3.svg"
      },
      {
          name: "placeHolder"
      },
      {
          name: "Collapsible UI With React",
          skills: "React.js | SASS | JavaScript | Webpack | NodeJS | Babel",
          downloadLink: "https://github.com/liamkande/Collapsible-Component-With-React/archive/master.zip",
          boxClass: "col-md-4 col-lg-4 box-three boxwrapper text-center",
          pClass:"text-center detail",
          description: "Built a flexible, reusable collapsible component using React.js",
          image: "images/thumbnail-SVG/thumbnail-3.svg"
      },
      {
          name: "Fetching Data UI With React",
          skills: "React.js | API | SASS | JavaScript | NodeJS ",
          downloadLink: "https://github.com/liamkande/Fetching-Data-With-ReactJS/archive/master.zip",
          boxClass: "col-md-4 col-lg-4 box-four boxwrapper text-center",
          pClass:"text-center detail",
          description: "Developed to demonstrate Fetching methods from an API with React.js.",
          image: "images/thumbnail-SVG/thumbnail-1.svg"
      },

      {
          name: "Banner Ad with Adobe Animate",
          skills: "Animate| HTML 5 | SWF | SVG | WebGL | JavaScript",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/LiamKande_Banner_Demo.zip",
          boxClass: "col-md-4 col-lg-4 box-two boxwrapper text-center",
          pClass:"text-center detail",
          description: "Built a banner ad with Adobe Animate by creating graphics, photos, designs, and brought objects to life using animation and interactivity.",
          image: "images/thumbnail-SVG/thumbnail-2.svg"
      },
      {
          name: "placeHolder"
      },
      {
          name: "User Interface with React",
          skills: "React.js | ES6 | JSX | JavaScript | Gulp | NPM",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/reactjs-UI.zip",
          boxClass: "col-md-4 col-lg-4 box-one boxwrapper text-center",
          pClass:"text-center detail",
          description: "Developed an Interface with React using components and subcomponents, worked with state to handle events, updates of views, search results and more.",
          image: "images/thumbnail-SVG/thumbnail-4.svg"
      },
      {
          name: "Responsive Hotel Website",
          skills: "JavaScript | HTML | CSS | Gulp | NPM",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Website_Images_with_JS.zip",
          boxClass: "col-md-4 col-lg-4 box-three boxwrapper text-center",
          pClass:"text-center detail",
          description: "Created a fully functional website using JavaScript. Automated responsive images markup, and worked with objects, variables, data types, conditionals, functions, loops, closures, the DOM and more.",
          image: "images/thumbnail-SVG/thumbnail-3.svg"
      },
      {
          name: "Responsive Design with Bootstrap",
          skills: "Bootstrap | HTML | CSS | JavaScript",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Responsive_Design_with_Bootstrap.zip",
          boxClass: "col-md-4 col-lg-4 box-four boxwrapper text-center",
          pClass:"text-center detail",
          description: "Created a website with a custom Bootstrap layout grid, Inserted a navigation bar, a container for a hero image, glyphicons and page content by working with columns and containers.",
          image: "images/thumbnail-SVG/thumbnail-1.svg"
      },
      {
          name: "placeHolder"
      },
      {
          name: "SEO Audit",
          skills: "SEO",
          downloadLink: "projects/P4_-_SEO_Audit__Project_Template_Slides.pdf",
          boxClass: "col-md-4 col-lg-4 box-two boxwrapper text-center",
          pClass:"text-center detail",
          description: "Performed an audit of a website, recommended actions to improve the website's ranking in search engine results, created a target keyword list, evaluated the design, content and the UX of the site, and recommended improvements.",
          image: "images/thumbnail-SVG/thumbnail-2.svg"
      },
      {
          name: "Bulletin Board App with React",
          skills: "React.js | ES6 | JSX | Babel | NPM ",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Bulletin-Board-App-with-ReactJS.zip",
          boxClass: "col-md-4 col-lg-4 box-one boxwrapper text-center",
          pClass:"text-center detail",
          description: "Developed a Bulletin board app using React components and properties, added state to components to handle events, worked with PropTypes, developed a more complete app with React.js and companion tools like Babel, NPM, and more.",
          image: "images/thumbnail-SVG/thumbnail-4.svg"
      },
      {
          name: "Classic Arcade Game Clone",
          skills: "HTML5 Canvas | OOP | JavaScript",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Arcade-game_Frogger-Clone.zip",
          boxClass: "col-md-4 col-lg-4 box-three boxwrapper text-center",
          pClass:"text-center detail",
          description: "Developed an HTML5 Canvas powered video game, using the best practices in Object Oriented JavaScript.",
          image: "images/thumbnail-SVG/thumbnail-3.svg"
      },
      {
          name: "placeHolder"
      },
      {
          name: "Website Optimization",
          skills: "Chrome Developer Tools | Critical rendering path",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Optimization3.zip",
          boxClass: "col-md-4 col-lg-4 box-four boxwrapper text-center",
          pClass:"text-center detail",
          description: "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
          image: "images/thumbnail-SVG/thumbnail-1.svg"
      },
      {
          name: "Facebook Campaign",
          skills: "Facebook Ad Manager",
          downloadLink: "https://s3.us-east-2.mazonaws.com/liamkande.com/projects/P3_-_Part_2-_Project_Template_Slides.pdf",
          boxClass: "col-md-4 col-lg-4 box-two boxwrapper text-center",
          pClass:"text-center detail",
          description: "Created, managed, and monitored an advertising campaign on Facebook for a product. Evaluated post-campaign results to and drafted a strategy for additional campaigns focused on ROI.",
          image: "images/thumbnail-SVG/thumbnail-2.svg"
      },
      {
          name: "Interactive Resume",
          skills: " jQuery | JavaScript | JSON | HTML | CSS",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/interactive_Resume.zip",
          boxClass: "col-md-4 col-lg-4 box-one boxwrapper text-center",
          pClass:"text-center detail",
          description: "Using jQuery, I developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information.",
          image: "images/thumbnail-SVG/thumbnail-4.svg"
      },
      {
          name: "placeHolder"
      },
      {
          name: "Analog clock",
          skills: "JavaScript | CSS | HTML",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Analog_Clock_Project.zip",
          boxClass: "col-md-4 col-lg-4 box-three boxwrapper text-center",
          pClass:"text-center detail",
          description: "Used objects and methods to get the current time, variables to hold information, methods to break that time, operators to translate information into degrees and DOM element properties for positioning.",
          image: "images/thumbnail-SVG/thumbnail-3.svg"
      },
      {
          name: "Typing Speed Tester",
          skills: "JavaScript | CSS | HTML",
          downloadLink: "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Typing_Speed_Tester.zip",
          boxClass: "col-md-4 col-lg-4 box-four boxwrapper text-center",
          pClass:"text-center detail",
          description: "Used JavaScript to interact with the components of a app by creating event listeners to detect typing in the text area. Built a count-up timer. Created functions for leading zeros, spelling errors detector, and a reset button to stop the timer when the test is done.",
          image: "images/thumbnail-SVG/thumbnail-1.svg"
      },
      {
          name: "AdWords Campaign",
          skills: "Search advertising with Adwords",
          downloadLink: "projects/P5_-Part_2.pdf",
          boxClass: "col-md-4 col-lg-4 box-two boxwrapper text-center",
          pClass:"text-center detail",
          description: "Created, executed, and monitored a search engine marketing campaign on AdWords for a product. Evaluated post-campaign results to and drafted a strategy for additional campaigns focused on ROI.",
          image: "images/thumbnail-SVG/thumbnail-2.svg"
      },
      {
          name: "placeHolder"
      }
    ]
  })
}
    render() {
    	const { projects } = this.state
        return (
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
            <Crsl />
              <div className="row" >
                {projects.map(
                	(data, i) =>
                		<Project key={i}
                				{...data} />
                	 )}
            </div>
            </div>
            </div>
        )
    }
  }
export default ProjectList
