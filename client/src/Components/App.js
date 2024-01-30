// components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
};

export default App;
