// THIS DATABASE CAN BE FOUND AT HEROKU > MASSIVE-TEST > RED

import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <Link to="/">This is going to be my header</Link>
            <Link to="/dogs"><button>Dashboard</button></Link>
            <Link to="/new"><button>Submit New</button></Link>
          </div>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
