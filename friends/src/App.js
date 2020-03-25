import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import { AddFriendForm } from './components/AddFriendForm';

function App() {
  return (
    <Router>
      <div className="App">
        <p>
            <Link to="/login">Login</Link> 
            <br />

            <Link to="/protected">Protected Page</Link>
      </p>
        <Switch>
          <Route exact path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
