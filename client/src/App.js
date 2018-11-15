import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gifts from "./pages/Landing";
import Detail from "./pages/Detail"
import {Navbar} from "./components/Navbar";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Gifts} />
        <Route exact path="/gifts" component={Gifts} />
        <Route exact path="/gifts/:id" component={Detail} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
