import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './static/css/index.css';

import SearchPage from './components/search/searchPage';
import IssuesPage from './components/issues/issuesPage';

const routes = (
  <Router>
    <div>
      <Route exact path='/' component={SearchPage} />
      <Route exact path='/issues' component={IssuesPage} />
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
