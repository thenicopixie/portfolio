import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Home from './components/home';
import Projects from './components/projects';
import Notfound from './components/notfound'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
      <div className="routes-container">
        <div className="routes">
            <h3 className="nav-link"> 
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </h3>
            <h3 className="nav-link">
            <NavLink exact activeClassName="active" to="/about">About</NavLink>
            </h3>
            <h3 className="nav-link">
            <NavLink exact activeClassName="active" to="/projects">Projects</NavLink>
            </h3>
            <h3 className="nav-link">
            <NavLink exact activeClassName="active" to="/blog">Blog</NavLink>
            </h3>
            <h3 className="nav-link">
            <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
            </h3>
        </div>
        <Switch>
            <Route exact path="/portfolio" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
