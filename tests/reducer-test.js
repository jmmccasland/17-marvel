import reducer from '../app/reducer/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('', (assert) => {
    const oldState = { seriesData: null, comics: [], characters: [], modal: null };
    const action = { type: 'SERIES_DATA@FIND_COMPLETE', data: { name: 'Spidermans' } };
    const newState = { seriesData: { name: 'Spidermans' }, comics: [], characters: [], modal: null };

    assert.deepEqual((oldState, action), newState);
  });
});
