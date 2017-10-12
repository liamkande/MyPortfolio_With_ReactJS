import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Main, Portfolio } from './All'

const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Main}/>
    	<Route path="portfolio" component={Portfolio}/>
    </Router>
)
export default routes
