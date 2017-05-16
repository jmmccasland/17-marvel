import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });
});

// Test #1
test('When loading series info replace the old series info', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Spiderman' } };
  const expectedState = { characterData: [], comicData: [], seriesInfo: { name: 'Spiderman' }, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});

// Test #2
test('When loading character data replace the character data', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: [{ name: 'Spiderman' }] };
  const expectedState = { characterData: [{ name: 'Spiderman' }], comicData: [], seriesInfo: null, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});

// Test #3
test('When loading comic data replace the comic data', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'COMICS@FIND_ALL_COMPLETE', data: [{ name: 'Spiderman' }] };
  const expectedState = { characterData: [], comicData: [{ name: 'Spiderman' }], seriesInfo: null, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});


// Test #4
test('When adding modal data replace the old modal data', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
  const action = { type: 'MODAL@SET', data: { message: 'Read More' } };
  const expectedState = { characterData: [], comicData: [], seriesInfo: null, modal: { message: 'Read More' } };

  assert.deepEqual(reducer(oldState, action), expectedState);
});

// Test #5
test('When clearing modal data set the modal state to "null"', (assert) => {
  const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: { message: 'Read More' } };
  const action = { type: 'MODAL@CLEAR' };
  const expectedState = { characterData: [], comicData: [], seriesInfo: null, modal: null };

  assert.deepEqual(reducer(oldState, action), expectedState);
});
