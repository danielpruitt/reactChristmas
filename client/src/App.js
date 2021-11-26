import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from "mongodb-stitch-browser-sdk";
import Gifts from "./pages/Landing";
import Detail from "./pages/Detail";
import Instructions from "./pages/Instructions";
//Indivdual's pages
import Mima from "./pages/Mima";
import MaryAndBruce from "./pages/MaryAndBruce";
import CathyAndNick from "./pages/CathyAndNick";
import SusanAndAllan from "./pages/SusanAndAllan";
import ChristellaAndRyan from "./pages/ChristellaAndRyan";
import RachelAndDaniel from "./pages/RachelAndDaniel";
import TiffanyAndAndrew from "./pages/TiffanyAndAndrew";
import MelissaAndBen from "./pages/MelissaAndBen";
import AllisonAndAndrew from "./pages/AllisonAndAndrew";
import Mattie from "./pages/Mattie";
import Tess from "./pages/Tess";
import Thomas from "./pages/Thomas";
import Kira from "./pages/Kira";
import Ethan from "./pages/Ethan";
import {Navbar} from "./components/Navbar";

import './App.css';
import Bridger from './pages/Bridger';

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
        {/* <Route exact path="/Mima" component={Mima}/> */}
        <Route exact path="/rachelanddaniel" component={RachelAndDaniel}/>
        <Route exact path="/susanandallan" component={SusanAndAllan}/>
        <Route exact path="/MaryAndBruce" component={MaryAndBruce}/>
        <Route exact path="/CathyAndNick" component={CathyAndNick}/>
        <Route exact path="/ChristellaAndRyan" component={ChristellaAndRyan}/>
        <Route exact path="/TiffanyAndAndrew" component={TiffanyAndAndrew}/>
        {/* <Route exact path="/MelissaAndBen" component={MelissaAndBen}/> */}
        <Route exact path="/AllisonAndAndrew" component={AllisonAndAndrew}/>
        <Route exact path="/Mattie" component={Mattie}/>
        <Route exact path="/Tess" component={Tess}/>
        <Route exact path="/Thomas" component={Thomas}/>
        <Route exact path="/Kira" component={Kira}/>
        <Route exact path="/Ethan" component={Ethan}/>
        
        <Route exact path="/Bridger" component={Bridger}/>

        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
