import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MetricsData } from '../redux/metrics/Metrics';
import './Metrics.css';

const Metrics = () => {
  const metrics = useSelector((state) => state.MetricsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!metrics.length) {
      dispatch(MetricsData());
    }
  }, []);

  return (
    <div className="metrics">
      <h4>Stats by country</h4>
      <div className="country-data">
        {metrics.map((data) => (
          <div key={data.country} className="even">
            <div className="country">
              <div className="country-item">
                <h4>{data.country}</h4>
                <p className="para">
                  <span>Cases:</span>
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
