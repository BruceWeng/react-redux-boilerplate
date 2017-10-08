import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hello, React!</p>

        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
