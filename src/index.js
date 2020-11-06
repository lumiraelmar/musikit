import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Album from './pages/Album'
import Dashboard from './pages/Dashboard';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path='/album' component={Album} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
