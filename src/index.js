import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './css/portfolio.css'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker'


window.React = React

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
