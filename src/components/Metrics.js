import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
      <div>
        <ArrowBackIosIcon />
      </div>
      <div className="continent-cont">
        <div className="home-img" style={styles}> </div>
        <div className="continent">
          <h4><span>Cases</span></h4>
        </div>
      </div>
      <h4>Stats by country</h4>
      <div className="country-data">
        {filtered.map((data) => (
          <div key={data.country} className="even">
            <div className="country">
              <div className="country-item">
                <h4>{data.country}</h4>
                <p className="para">
                  {data.cases.active}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
