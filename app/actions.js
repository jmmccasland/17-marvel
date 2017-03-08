export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}

export function charactersFindAllComplete(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}

export function comicsFindAllComplete(data) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data,
  };
}

export function modalSet(data) {
  return {
    type: 'MODAL@SET',
    data,
  };
}

export function modalClear(data) {
  return {
    type: 'MODAL@CLEAR',
    data,
  };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=SPIDERMAN&apikey=APIKEY')
    .then(res => res.json())
    .then((data) => {
      const series = data.data.results[0];
      dispatch(seriesInfoLoadComplete(series));
      dispatch(charactersFindForId(series.id));
      dispatch(issuesFindForId(series.id));
    });
  };
}
