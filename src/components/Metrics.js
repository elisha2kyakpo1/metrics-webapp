import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   Button,
//   Badge,
// } from 'react-bootstrap';
import { MetricsData } from '../redux/metrics/Metrics';

const Metrics = () => {
  const metrics = useSelector((state) => state.MetricsReducer);

  console.log(metrics);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!metrics.length) {
      dispatch(MetricsData());
    }
  }, []);

  // const handleTicketBooking = (id) => dispatch(reserveRocketTicket(id));
  // const handleTicketCancellation = (id) => dispatch(cancelRocketTicket(id));

  return (
    <div className="">
      {metrics.map(({
        ipoDate, state, description, image,
      }) => (
        <div key={ipoDate} className="img-desc">
          <div className="img-div">
            <img src={image} alt="img" />
          </div>
          <div style={{ padding: '0 1rem' }}>
            <div>
              <h2>{state}</h2>
              <h4>
                {description}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
