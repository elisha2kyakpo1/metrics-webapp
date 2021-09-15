import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowBackIos, Settings, Mic } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Metrics.css';
import homeImg from '../assets/images/europe.png';
import { fetchCountries } from '../redux/metrics/Metrics';

const Item = ({ confirmed, name }) => (
  <div className="Home-item-content">
    <div className="Home-item-icon">
      <ArrowForwardIcon />
    </div>
    <div className="Home-item-top">
      <img src={homeImg} alt="" className="Home-item-image" />
    </div>
    <div className="Home-item-bottom">
      <h4 className="App-title">{name}</h4>
      <p className="App-subtitle">{confirmed}</p>
    </div>
  </div>
);

const Grid = ({ items = [] }) => (
  <ul className="country-data">
    {items.map(({ name, confirmed }) => (
      <li key={name} className="country">
        <Link to={`/country/${name}`}>
          <Item confirmed={confirmed} name={name} />
        </Link>
      </li>
    ))}
  </ul>
);

const Metrics = () => {
  const { items, totalConfirmed } = useSelector((state) => state.MetricsReducer);

  console.log(items);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCountries('Africa'));
    }
  }, []);

  const styles = {
    backgroundImage: `url(${homeImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  // const corona = {
  //   backgroundImage: `url(${homeImg})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // };

  return (
    <div className="metrics">
      <div className="header">
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
      </div>
      <div className="continent-cont">
        <div className="home-img" style={styles}> </div>
        <div className="continent">
          <div>
            <h2>Africa</h2>
            <span>{totalConfirmed}</span>
          </div>
        </div>
      </div>
      <div className="country-cont">
        <div className="country-data">
          <section className="country-cont">
            <h5 className="stats">STATS BY COUNTRY</h5>
            <Grid items={items} />
          </section>
        </div>
      </div>
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
