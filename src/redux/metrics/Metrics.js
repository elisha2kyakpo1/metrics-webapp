const FETCH_SELECTED = 'metrics/FETCH_SELECTED';
const FETCH_CONTINENTS = 'metrics/FETCH_CONTINENTS';

const loadMetricsCountries = (payload) => ({
  type: FETCH_CONTINENTS,
  payload,
});

const loadMetricsCountry = (payload) => ({
  type: FETCH_SELECTED,
  payload,
});

const initialState = {
  totalConfirmed: 0,
  items: [],
  selected: null,
};

const MetricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTINENTS:
      return action.payload;
    case FETCH_SELECTED:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export {
  loadMetricsCountry,
  loadMetricsCountries,
  MetricsReducer,
};
