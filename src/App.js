import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path = "/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
