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

const MetricsData = () => (dispatch) => {
  fetch('https://covid-193.p.rapidapi.com/statistics', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'f40c691532mshbbfb84c09586d2bp1aa6cajsn9c2db14b73a5',
    },
  })
    .then((response) => response.json())
    .then((json) => dispatch(LoadMetrics(json)));
};

export {
  MetricsData,
  MetricsReducer,
};
