import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
      <Route path = "/home">
          <Home/>
        </Route>
        <Route path = "/posts/:postId">
          <PostDetails/>
        </Route>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
