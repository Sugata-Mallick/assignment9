import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homes from './components/Home/Home';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MenuBar from './components/MenuBar/MenuBar';
import About from './components/About/About'
import Services from './components/Services/Services'

import NotFound from './components/NotFound/NotFound';
import Classes from './components/Classes/Classes';

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/classes'>
            <Classes></Classes>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
