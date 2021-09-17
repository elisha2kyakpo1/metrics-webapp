const FETCH_TOTAL_SELECTED = 'metrics/FETCH_TOTAL_SELECTED';
const FETCH_COUNTRY = 'metrics/FETCH_COUNTRY';

const loadMetricsCountry = (payload) => ({
  type: FETCH_COUNTRY,
  payload,
});

const loadMetricsTotal = (payload) => ({
  type: FETCH_TOTAL_SELECTED,
  payload,
});

const initialState = {
  totalConfirmed: 0,
  countries: [],
};

const MetricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY:
      return { ...state, countries: [...state.countries, action.payload] };
    case FETCH_TOTAL_SELECTED:
      return { ...state, totalConfirmed: action.payload };
    default:
      return state;
  }
};

export const countries = (state) => state.countries;
export const totalConfirmed = (state) => state.totalConfirmed;

export {
  loadMetricsCountry,
  loadMetricsTotal,
  MetricsReducer,
};
