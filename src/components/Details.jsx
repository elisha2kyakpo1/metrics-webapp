import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { countries } from '../redux/Metrics/covidInfo';
import europe from './europe.png';

export default function Details() {
  const params = useParams();
  const { id } = params;
  const country = useSelector(countries).find((country) => country.id === id);
  const states = (country.regions.length > 0
    ? (country.regions.map(
      (region) => (
        <div
          className={`d-flex justify-content-between
          align-items-center p-2 text-white breakdown
      }`}
          key={region.id}
        >
          <h5 className="m-0 fw-light">{region.name}</h5>
          <div className="d-flex align-items-center">
            <p className="m-0 me-2">
              {Number(region.today_confirmed).toLocaleString()}
              {' '}
              Cases
            </p>
          </div>
        </div>
      ),
    ))
    : (
      <div className=" text-white d-flex align-items-center p-2">
        <h5 className="m-0 fw-light ps-3">These regions are currently not available</h5>
      </div>
    ));

  return (
    <div className="details">
      <Row className="m-0">
        <Col xs={6} sm={6} md={6} className="d-flex justify-content-end">
          <img
            src={europe}
            alt="Africa"
            height="150px"
          />
        </Col>
        <Col
          xs={6}
          sm={6}
          md={6}
          className="p-0 text-white d-flex flex-column justify-content-center align-items-end pe-4"
        >
          <h4 className="fw-bold m-0">{country ? country.name.toUpperCase() : 'Loading...'}</h4>
          <p>
            {country ? Number(country.today_confirmed).toLocaleString() : '0'}
            {' '}
            Total Cases
          </p>
        </Col>
      </Row>
      <Row className="m-0 mt-4 bg-blue-dark">
        <h6 className="text-white dark-h6 fw-bold p-2 m-0">
          {`${country.name.toUpperCase()} CASES BREAKDOWN`}
        </h6>
      </Row>
      {states}
    </div>
  );
}
