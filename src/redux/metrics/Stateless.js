import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { loadMetricsCountries, loadMetricsCountry } from './Metrics';

const MetricsDataContinent = async (continent) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?continent=${continent}`);
  const data = await response.json();
  return data;
};

const MetricsDataCountry = async (country) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
  const data = await response.json();
  return data;
};

const fetchCountry = (country) => async (dispatch) => {
  dispatch(showLoading());
  const data = await MetricsDataCountry(country);
  dispatch(loadMetricsCountry(data));
  dispatch(hideLoading());
};

const fetchCountries = (continent) => async (dispatch) => {
  dispatch(showLoading());
  const map = await MetricsDataContinent(continent);
  const data = Object.values(map).reduce((accumulator, currentValue) => {
    const { All: { country, confirmed } } = currentValue;

    accumulator.items.push({ name: country, confirmed });
    accumulator.totalConfirmed += confirmed;

    return accumulator;
  }, {
    totalConfirmed: 0,
    items: [],
  });

  data.items = data.items.sort((a, b) => b.confirmed - a.confirmed);

  dispatch(loadMetricsCountries(data));
  dispatch(hideLoading());
};

export { fetchCountries, fetchCountry };
