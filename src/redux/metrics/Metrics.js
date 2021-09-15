const FETCH_METRICS = 'metrics/FETCH_METRICS';

const LoadMetrics = (payload) => ({
  type: FETCH_METRICS,
  payload,
});

const MetricsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_METRICS: {
      const loadCountries = Object.entries(action.payload).map(([key]) => {
        const [country] = key;
        return {
          ...country,
        };
      });

      return loadCountries;
    }
    default:
      return state;
  }
};

const MetricsData = (continent = 'Africa') => (dispatch) => {
  fetch(`https://covid-api.mmediagroup.fr/v1/cases?continent=${continent}`)
    .then((response) => response.json())
    .then((json) => dispatch(LoadMetrics(json)));
};

export {
  MetricsData,
  MetricsReducer,
};
