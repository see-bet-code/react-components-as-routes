import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" render={() => <h1>Home!</h1>} /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
    
  </Router>),
  document.getElementById('root')
);