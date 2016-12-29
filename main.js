var React = require('react'),
    ReactDOM = require('react-dom');

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { App, Home, About, Contact } from './router';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
  
), document.getElementById('app'))
