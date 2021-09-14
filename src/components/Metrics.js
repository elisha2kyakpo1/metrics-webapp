import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowBackIos, Settings, Mic } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { MetricsData } from '../redux/metrics/Metrics';
// import imgData from './images';
import './Metrics.css';
import homeImg from '../assets/images/europe.png';

const Metrics = () => {
  const metrics = useSelector((state) => state.MetricsReducer);
  const filtered = metrics.slice(100, 120);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!metrics.length) {
      dispatch(MetricsData());
    }
  }, []);

  const styles = {
    backgroundImage: `url(${homeImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

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
        <div>
          <Settings />
          <Mic />
        </div>
      </div>
      <div className="continent-cont">
        <div className="home-img" style={styles}> </div>
        <div className="continent">
          <h2>
            {filtered.map((cont) => (
              <span key={cont.population}>{!cont.continent === 'Africa'}</span>
            ))}
          </h2>
          <h4><span>Cases</span></h4>
        </div>
      </div>
      <div className="country-cont">
        <h4 className="stats">Stats by country</h4>
        <div className="country-data">
          {filtered.map((data) => (
            <div key={data.country} className="even">
              <div className="country">
                <div className="arrow-forward-btn">
                  <ArrowForwardIcon />
                </div>
                <div className="country-item">
                  <h4>{data.continent}</h4>
                  <p className="para">
                    {data.cases.active}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
