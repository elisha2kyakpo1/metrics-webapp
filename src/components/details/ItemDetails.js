import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ArrowBackIos, Settings, Mic } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './ItemDetails.css';
import { fetchCountry } from '../../redux/metrics/Metrics';
import homeImg from '../../assets/svg/corona.svg';

const ItemDetails = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { country, loading } = useSelector((state) => ({
    loading: state.loadingBarReducer.default,
    country: state.MetricsReducer.selected,
  }));

  useEffect(() => {
    dispatch(fetchCountry(name));
  }, []);

  if (loading || !country) {
    return null;
  }

  const { All } = country;
  const list = Object.entries(country).slice(1);

  const styles = {
    backgroundImage: `url(${homeImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: '0.5',
  };

  return (
    <section className="details">
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
      <div className="continent-cont">
        <div style={styles} className="home-img"> </div>
        <div className="continent">
          <div>
            <h2>{All.country}</h2>
            <h4>
              {All.confirmed}
              {' '}
              <span>Cases</span>
            </h4>
          </div>
        </div>
      </div>
      <section className="Home-stats">
        <h5 className="App-section-title">CITY/TOWN BREAKDOWN - 2021</h5>
        <ul>
          {list.map(([name]) => (
            <li key={name} className="Details-item">
              <h6 className="Detail-title">{name}</h6>
              <div className="Details-right">
                <p className="App-subtitle">
                  {' '}
                  cases
                </p>
                <ArrowForwardIcon />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ItemDetails;
