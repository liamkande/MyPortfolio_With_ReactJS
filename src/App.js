import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import About from './Components/About'
import NavBar from './Components/NavBar'
import Jumbotron from './Components/Jumbotron'
import CarouselImg from './Components/Carousel'
import ProjectsList from './Components/ProjectsList'

const data = require('./data/ProjetsData.json')

class App extends Component {
  state= {
    data: []
  }

componentDidMount () {
  const script = document.createElement("script")
  script.src = "http://use.edgefonts.net/alfa-slab-one:n4:default.js"
  script.async = true
  document.body.appendChild(script)

  this.setState({data: data})
}

  render() {
    const data= this.state.data
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" render={() =>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
              <Jumbotron />
              <CarouselImg/>
              <ProjectsList projects={data} />
            </div>
          </div> } />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
