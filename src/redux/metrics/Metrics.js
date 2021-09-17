const FETCH_TOTAL = 'metrics/FETCH_TOTAL_SELECTED';
export const FETCH_DATA = 'data/FETCH_DATA';
const FETCH_COUNTRY = 'metrics/FETCH_COUNTRY';

const loadCountry = (payload) => ({
  type: FETCH_COUNTRY,
  payload,
});

const loadTotal = (payload) => ({
  type: FETCH_TOTAL,
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
    case FETCH_TOTAL:
      return { ...state, totalConfirmed: action.payload };
    default:
      return state;
  }
};

export const countries = (state) => state.countries;
export const totalConfirmed = (state) => state.totalConfirmed;

export {
  loadCountry,
  loadTotal,
  MetricsReducer,
};
