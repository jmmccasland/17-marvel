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


export function charactersFindForId(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
    .then(res => res.json())
    .then((data) => {
      const characters = data.data.results;
      dispatch(charactersFindAllComplete(characters));
    });
  };
}

export function issuesFindForId(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`)
    .then(res => res.json())
    .then((data) => {
      const issues = data.data.results;
      dispatch(comicsFindAllComplete(issues));
    });
  };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(res => res.json())
    .then((data) => {
      const series = data.data.results[0];
      dispatch(seriesInfoLoadComplete(series));
      dispatch(charactersFindForId(series.id));
      dispatch(issuesFindForId(series.id));
    });
  };
}
