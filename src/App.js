import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import Speisekarte from './components/Speisekarte';
import Kontakt from './components/Kontakt';
import Öffnungszeiten from './components/Öffnungszeiten';
import Galerie from './components/Galerie';


function App() {

  
  return (
    <Router>
      <Header />

      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/speisekarte" component={Speisekarte}/>
          <Route path="/kontakt" component={Kontakt}/>
          <Route path="/öffnungszeiten" component={Öffnungszeiten}/>
          <Route path="/galerie" component={Galerie}/>
          <Route path="*">
            <h1>404</h1>
          </Route>
      {/* <main>
          <header>

          </header>
      </main> */}

      </Switch>
    </Router>
  );
}

export default App;
