import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ArrowBackIos, Settings, Mic } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './ItemDetails.css';
import { fetchCountry } from '../../redux/metrics/Metrics';

const ItemDetails = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => ({
    country: state.MetricsReducer.selected,
  }));

  useEffect(() => {
    dispatch(fetchCountry(name));
  }, []);

  const { All } = country;
  const list = Object.entries(country).slice(1);

  return (
    <section>
      <header className="App-header">
        <Link to="/">
          <ArrowBackIos />
        </Link>
        <h5 className="App-header-title">town/city views</h5>
        <Mic />
        <div className="pl-5">
          <Settings />
        </div>
      </header>
      <div className="Details-banner">
        <div className="Details-banner-left"> </div>
        <div className="Details-banner-right">
          <h1 className="App-title">{All.country}</h1>
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
