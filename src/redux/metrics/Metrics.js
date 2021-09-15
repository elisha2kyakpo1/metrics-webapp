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

const fetchCountry = (name) => async (dispatch) => {
  const data = await MetricsDataCountry(name);
  dispatch(loadMetricsCountry(data));
};

const fetchCountries = (continent) => async (dispatch) => {
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
};

export {
  fetchCountries,
  fetchCountry,
  MetricsReducer,
};
