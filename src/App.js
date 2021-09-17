import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { ArrowBackIos, Settings, Mic } from '@material-ui/icons';
import './App.css';
import Metrics from './components/Metrics';
import ItemDetails from './components/details/ItemDetails';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Metrics,
  },
  {
    path: '/country/:name',
    name: 'Details',
    component: ItemDetails,
  },
];

const App = () => (
  <>
    <header className="header">
      <div className="arrow">
        <Link to="/">
          <ArrowBackIos />
        </Link>
        <span>2021</span>
      </div>
      <div>
        <h4 className="header-title">town/city views</h4>
      </div>
      <div className="settings">
        <Settings />
        <Mic />
      </div>
    </header>
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
      </Switch>
    </Router>
  </>
);

export default App;
