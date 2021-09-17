import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Settings, Mic } from '@material-ui/icons';
import { Navbar } from 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetails from './components/details/ItemDetails';
import Metrics from './components/Metrics';

function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar className="px-4 text-white bg-blue-dark d-flex justify-content-between">
            <Link to="/" className="text-decoration-none text-white fw-bold">
              &#60; 2021
            </Link>
            <h3 className="m-0">COVID-19 STATS</h3>
            <span>
              <Mic />
              <Settings />
            </span>
          </Navbar>
        </header>
        <main>
          <Switch>
            <Route path="/details/:id">
              <ItemDetails />
            </Route>
            <Route path="/">
              <Metrics />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
