import { loadMetricsCountry, loadMetricsTotal } from './Metrics';

const apiEndpoint = 'https://api.covid19tracking.narrativa.com/api/';

export const fetchCovidData = async () => {
  const today = new Date().toISOString().split('T')[0];
  let response = await fetch(`${apiEndpoint}/${today}`);
  response = await response.json();
  return response;
};

export const fetchData = async (dispatch) => {
  const data = await fetchCovidData();
  const today = new Date().toISOString().split('T')[0];
  dispatch(loadMetricsTotal(data.total.today_confirmed));
  Object.keys(data.dates[today].countries).forEach((country) => {
    dispatch(loadMetricsCountry(data.dates[today].countries[country]));
  });
};
