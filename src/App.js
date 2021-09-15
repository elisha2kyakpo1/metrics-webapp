import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  <Router>
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
    </Switch>
  </Router>
);

export default App;
