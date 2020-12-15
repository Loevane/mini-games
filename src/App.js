import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import RandomNum from './Components/RandomNum';
import RandomName from './Components/RandomName';
import ListeMaudite from './Components/ListeMaudite';
import MiniJeux from './Components/MiniJeux';
import Roulette from './Components/Roulette';
import QuiRap from './Components/QuiRap';


export default function App() {
  return (
    <Router>
        <Switch>
          <Route component={MiniJeux} path="/" exact />
          <Route component={RandomNum} path="/random-nombre" />
          <Route component={RandomName} path="/random-nom" />
          <Route component={ListeMaudite} path="/liste-maudite" />
          <Route component={Roulette} path="/roulette" />
          <Route component={QuiRap} path="/qui-rap" />
        </Switch>
      </Router>
  );
}