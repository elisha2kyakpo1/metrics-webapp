import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowBackIos, Settings, Mic } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Metrics.css';
import homeImg from '../assets/images/europe.png';
import { fetchCountries } from '../redux/metrics/Metrics';

const corona = {
  backgroundImage: `url(${homeImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Item = ({ confirmed, name }) => (
  <div className="country-ite">
    <div className="arrow-forward-btn">
      <ArrowForwardIcon />
    </div>
    <div className="corona"> </div>
    <div className="country-title">
      <div>
        <h4 className="">{name}</h4>
        <p className="para">{confirmed}</p>
      </div>
    </div>
  </div>
);

const Grid = ({ items = [] }) => (
  <div className="country-cont">
    <h5 className="stats">STATS BY COUNTRY</h5>
    <div className="country-data">
      {items.map(({ name, confirmed }) => (
        <div key={name} className="even">
          <div style={corona} className="country">
            <Link to={`/country/${name}`}>
              <Item confirmed={confirmed} name={name} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Metrics = () => {
  const { items, totalConfirmed, loading } = useSelector((state) => ({
    ...state.MetricsReducer,
    loading: state.loadingBarReducer.default,
  }));

  const continent = 'Europe';

  const dispatch = useDispatch();
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCountries(continent));
    }
  }, []);

  if (loading) {
    return null;
  }

  const styles = {
    backgroundImage: `url(${homeImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="metrics">
      <header className="header">
        <div className="arrow">
          <ArrowBackIos />
          <span>2021</span>
        </div>
        <div>
          <h4>total cases</h4>
        </div>
        <div className="settings">
          <Settings />
          <Mic />
        </div>
      </header>
      <div className="continent-cont">
        <div className="home-img" style={styles}> </div>
        <div className="continent">
          <div>
            <h2>{continent}</h2>
            <span>
              {totalConfirmed}
              {' '}
              Cases
            </span>
          </div>
        </div>
      </div>
      <Grid items={items} />
    </div>
  );
};

Item.propTypes = {
  confirmed: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default Metrics;
