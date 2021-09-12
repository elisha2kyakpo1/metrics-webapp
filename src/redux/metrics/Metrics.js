const FETCH_METRICS = 'metrics/FETCH_METRICS';
const API_KEY = '59361493023a4af786249dce2cfa18d8';

const LoadMetrics = (payload) => ({
  type: FETCH_METRICS,
  payload,
});

const MetricsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_METRICS:
      return action.payload.map((metrics) => {
        const {
          id,
          country_name: countryName,
          image,
          description,
        } = metrics;
        return {
          id, countryName, image, description,
        };
      });
    default:
      return state;
  }
};

const MetricsData = () => (dispatch) => {
  fetch(`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => dispatch(LoadMetrics(json)));
};

export {
  MetricsData,
  MetricsReducer,
};
