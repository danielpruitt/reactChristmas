import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gifts from "./pages/Landing";
import Detail from "./pages/Detail";
import Instructions from "./pages/Instructions";
import {Navbar} from "./components/Navbar";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <br/>
      <Switch>
        <Route exact path="/" component={Gifts} />
        <Route exact path="/gifts" component={Gifts} />
        <Route exact path="/gifts/:id" component={Detail} />
        <Route exact path="/instructions" component={Instructions}/>
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
