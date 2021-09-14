const FETCH_METRICS = 'metrics/FETCH_METRICS';

const LoadMetrics = (payload) => ({
  type: FETCH_METRICS,
  payload,
});

const MetricsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_METRICS:
      return action.payload.response;
    default:
      return state;
  }
};

const MetricsData = (continent, country) => (dispatch) => {
  fetch(`https://covid-api.mmediagroup.fr/v1/cases?continent=${continent}&country=${country}`)
    .then((response) => response.json())
    .then((json) => dispatch(LoadMetrics(json)));
};

export {
  MetricsData,
  MetricsReducer,
};
