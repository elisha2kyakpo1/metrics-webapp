import { loadMetricsCountry, MetricsReducer } from './Metrics';

test('should return the initial state', () => {
  expect(MetricsReducer(undefined, {})).toEqual(
    {
      countries: [],
      totalConfirmed: 0,
    },
  );
});

test('should handle a country\'s data being added to the store', () => {
  const previousState = {
    countries: [],
    totalConfirmed: 0,
  };

  const newState = MetricsReducer(previousState, loadMetricsCountry({
    name: 'Angola',
    id: 'Angola',
    total_confirmed: 50,
  }));

  expect(newState).toEqual(
    {
      countries: [
        {
          name: 'Angola',
          id: 'Angola',
          total_confirmed: 50,
        },
      ],
      totalConfirmed: 0,
    },
  );
});
